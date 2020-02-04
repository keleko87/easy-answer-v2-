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
                  rows="5"
                  id="content"
                  placeholder="Write your issue"
                  name="content"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="tags">Tags</label>
                <select
                  v-model.trim="$v.form.tags.$model"
                  class="form-control"
                  id="tags"
                  placeholder="Choose your tag"
                  name="tags"
                >
                  <option>html</option>
                  <option>css</option>
                  <option>js</option>
                  <option>node</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  id="photo"
                  type="file"
                  ref="photo"
                  name="photo"
                  @change="onSelect"
                />
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
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { SAVE_TICKET } from '../store/actions.type';

export default {
  name: 'Ticket',

  data() {
    return {
      form: {
        title: '',
        content: '',
        tags: [''],
        photo: ''
      }
    };
  },

  methods: {
    onSelect() {
      const photo = this.$refs.photo.files[0];
      this.form.photo = photo;
    },

    onSubmit() {
      const formData = new FormData();

      formData.append('title', this.form.title);
      formData.append('content', this.form.content);
      formData.append('tags', this.form.tags);

      if (this.form.photo) {
        formData.append('photo', this.form.photo);
      }

      this.$store.dispatch(SAVE_TICKET, formData);
      this.$router.push({ name: 'home' });
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
        minLength: minLength(10),
        maxLength: maxLength(500)
      },
      tags: {
        required
      },
      file: {}
    }
  }
};
</script>
