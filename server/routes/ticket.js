const express = require('express');
const router = express.Router();
const multer = require('multer');
const Ticket = require('../models/Ticket');
const Comment = require('../models/Comment');
const upload = multer ({dest: './public/uploads'});
const { ensureLoggedIn } = require('connect-ensure-login');

// GET TICKET LIST
router.get('/list', (req, res) => {
  Ticket.find({})
  .populate('creatorId')
  .exec()
  .then((data) => {
    const tickets = data.map((ticket) => {
      const image = `${process.env.API}/uploads/${ticket.image}`;
      const newTicket = Object.assign(ticket, { image });
      
      return newTicket;
    })
    
    res.json(tickets);
  })
  .catch( err => console.log(err));
});

//  Show template form adding
router.get('/new', (req, res, next) => {
  res.render('ticket/new');
});

//  Adding new Ticket
router.post('/new', upload.single('photo'), (req, res) => {
  let image;
  if (req.file) image = req.file.filename;
  else image = 'nofile';

  let ticket = new Ticket({
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
    image: image,
    creatorId: '5e26f691358276336845a086' // IMPORTANT USER ID LOGGED IN
  });
  console.log(ticket);
  ticket.save((err, ticket) => {
    if (err) {
      console.log('errorrrrr', err);
      if (statusCode >= 100 && statusCode < 600) res.status(statusCode);
      else res.status(500);
    }
    res.redirect('/');
  });
});


// Detail TICKET VIEW ->  IT IS NOT NECESSARY LOGIN TO VISIT THE VIEW
router.get('/:id', (req, res, next) => {
  Ticket.findById(req.params.id).populate('creatorId').exec()
    .then(ticket => {
      // res.render('ticket/detail', {
      //   ticket: ticket
      // });
      // if(ticket) return ticket;
      
      // NEW
      console.log(ticket);
      if (!ticket) { 
        res.json('No ticket found');
      }
      
      if (ticket.image !== 'nofile') {
        const image = `${process.env.API}/uploads/${ticket.image}`;
        const newTicket = Object.assign(ticket, { image });
        res.json(newTicket);

      } else {
        res.json(ticket);
      }
    })
    .catch(err => console.log(err));
});

//EDIT ticket - goes to the EDIT view
router.get('/:id/edit', ensureLoggedIn('auth/login'), (req, res, next) => {
  Ticket.findById(req.params.id, (err, ticket) => {
    if (err)  {
      return next(err); }
    else {

    res.render('ticket/edit', {
      ticket: ticket
    });
  }
  });
});

// UPDATE TICKET
router.post('/:id', upload.single('editPhoto'), ensureLoggedIn('auth/login'),  (req, res, next) => {

  let image;
  if (req.file) image = req.file.filename;
  else image = 'nofile';

  let updates = {
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
    image: image
  };

  Ticket.findByIdAndUpdate(req.params.id, updates, (err, ticket) => {
    if (err) {
      res.render('/index', {ticket, errors:ticket.errors});
    }
    res.redirect(`/ticket/${ticket._id}`);
  });
});

router.get('/:id/delete', ensureLoggedIn('auth/login'), function(req, res, next) {
  let id = req.params.id;
  Ticket.findByIdAndRemove(id, (err, obj) => {
    if (err){ return next(err); }
    res.redirect("/");
  });
});

// READ comments of the ticket
router.get('/comment/:id', (req, res, next) => {
  var id = req.params.id;
  Comment.find({ticket_rel: id})
    .populate('creatorCommentId')
    .exec()
    .then(comments => {

      const comms = comments.map((comment) => {
        if (comment.image !== 'nofile') {
          const image = `${process.env.API}/uploads/${comment.image}`;
          const newComment = Object.assign(comment, { image });
          return newComment;
        }

        return comment;
      });
  
      res.json(comms);
    })
    .catch( err => console.log(err));
});

var storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, callback) {
    console.log(file);
    callback(null, file.fieldname + '-' + Date.now());
  }
});

var upload2 = multer({ storage : storage}).single('photo-comment');

// router.post('/new', upload.single('photo'), (req, res) => {
//   let image;
//   if (req.file) image = req.file.filename;
//   else image = 'nofile';

// });

router.post('/comment/:id', (req, res) => {
	upload2(req, res, (err) => {
    console.log(req.file, 'req----------', req.body);

		if(err) {
			return res.end("Error uploading file.");
    }

    let image;
    if (req.file) image = req.file.filename;
    else image = 'nofile';
  
    console.log(image);

    let comment = new Comment({
      content: req.body.content,
      image: image,
      ticket_rel: req.params.id,
      creatorCommentId: '5e26f691358276336845a086', // req.user._id,
      solved: false,
      votes: []
    });

    console.log('NEW COMMENT', comment);

    comment.save((err, obj) => {
      // res.redirect(`/ticket/${obj.ticket_rel}`);
      if (obj) return res.json(obj)
      else if (err) return res.json(err)
    });
	});
});

//Add new comment in ticket
// router.post('/comment/:id', [upload.single('photo-comment'), ensureLoggedIn('/auth/login')], (req, res, next) => {
//
//   console.log(res);
//   console.log("NEW RESSSSSSSS!!!!!!!!!!!!");
// console.log(req.file);
//   let image;
//   if (req.file) image = req.file.filename;
//   else image = 'nofile';
//
//   let comment = new Comment({
//     content: req.body.content,
//     image: image,
//     ticket_rel: req.params.id,
//     creatorCommentId: req.user._id,
//     solved: false,
//     votes: []
//   });
//   console.log('NEW COMMENT', comment);
//   comment.save((err, obj) => {
//     res.redirect(`/ticket/${obj.ticket_rel}`);
//   });
// });

module.exports = router;
