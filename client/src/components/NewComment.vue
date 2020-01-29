<template>
  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">

      <div>
        comments CHILD {{ getComments }}
      </div>

      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <div class="form-group">
          <label for="content">Your answer</label>
          <textarea
            v-model.trim="$v.form.content.$model" 
            class="form-control" 
            rows="5"
            id="content"
            placeholder="Write your answer" 
            name="content">
          </textarea>
        </div>
        
        <div class="form-group">
          <input type="file" ref="photoComment" name="photo-comment" @change="onSelect">
          <!-- <file-upload /> -->
        </div>
        <button type="submit" class="btn btn-success">Send</button>
      </form>

    </div>

    comments: {{ comments.length }}
  <br>

  </div>  
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { SAVE_COMMENT } from '../store/actions.type';

export default {
  name: 'new-comment',

  data() {
    return {
      comments: [],
      form: {
        content: '',
        photoComment: ""
      }
    }
  },

  computed: {
    getComments() {
      console.log('get comments NEW COMMENT', this.$store.state.ticket.data.comments);
      return this.$store.state.ticket.data.comments;
    }
  },

  methods: {
    onSelect() {
      const photo = this.$refs.photoComment.files[0];
      this.form.photoComment = photo;
    },

    onSubmit() {
      const formData = new FormData();
      formData.append('content', this.form.content);

      if (this.form.photoComment) {
        formData.append('photoComment', this.form.photoComment);
      }

      const { id } = this.$route.params;
      this.$store.dispatch(SAVE_COMMENT, { form: formData, id });
      debugger;
      this.comments = this.$store.state.ticket.data.comments;
      // UPDATE COMMENTS PULLING
    }
  },

  validations: {
    form: {
      content: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(500)
      }
    }
  }
}

</script>

<style scoped>

</style>