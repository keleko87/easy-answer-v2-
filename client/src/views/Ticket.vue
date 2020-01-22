<template>
  <div class="ticket-new my-5">

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-8 col-md-offset-2 mx-auto">
          <h2>Create New ticket</h2>
        
          <div class="well">
            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
              <div class="form-group control-label">
                <label for="title">Title</label>
                <input 
                  type="text"
                  v-model.trim="$v.form.title.$model" 
                  class="form-control" 
                  id="title" 
                  placeholder="Enter a title for your post" 
                  name="title">
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <textarea
                  v-model.trim="$v.form.content.$model" 
                  class="form-control" 
                  rows="5" ç
                  id="content"
                  placeholder="Write your issue" 
                  name="content">
                </textarea>
              </div>
              <div class="form-group">
                <label for="tags">Tags</label>
                <select
                  v-model.trim="$v.form.tags.$model"
                  class="form-control" 
                  id="tags" 
                  placeholder="Choose your tag" 
                  name="tags">
                    <option>html</option>
                    <option>css</option>
                    <option>js</option>
                    <option>node</option>
                </select>
              </div>
              <div class="form-group">
                <input type="file" ref="photo" name="photo" @change="onSelect">
                <!-- <file-upload /> -->
              </div>
              <button type="submit" class="btn btn-success">Send Ticket</button>
            </form>
          </div>
        
        </div>
      </div>
    </div>

  </div> 
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
// import { SAVE_TICKET } from '../store/actions.type';
import { TicketsService } from '../common/api.service';

export default {
  data() {
    return {
      form: {
        title: '',
        content: '',
        tags: [''],
        photo: ""
      }
    }
  },

  methods: {
    onSelect() {
      const photo = this.$refs.photo.files[0];
      this.form.photo = photo;
    },

    async onSubmit() {
      const formData = new FormData();
      formData.append('title', this.form.title);
      formData.append('content', this.form.content);
      formData.append('tags', this.form.tags);
      formData.append('photo', this.form.photo);
      console.log('title', formData.getAll('title'));
      console.log('content', formData.getAll('content'));
      console.log('photo form', formData.getAll('photo'));

      try {
        const response = await TicketsService.saveTicket(formData);
        console.log('Uploaddeddd', response);
      }
      catch(err) {
        console.log('error', err);
      }
    },

    async saveTicket(ticket) {
      const response = await TicketsService.saveTicket(ticket);
      console.log('save', response);
      // this.$store.dispatch(SAVE_TICKET, ticket);
    }
  },

  validations: {
     form: {
        title: {
          required,
          minLength: minLength(5)
        },
        content: {
          required,
          minLength: minLength(10)
        },
        tags: {
          required
        },
        file: {
        }
      }
  }
}
</script>

<style scoped>
  
</style>