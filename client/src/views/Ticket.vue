<template>
  <div class="ticket-new my-5">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-8 col-md-offset-2 mx-auto">
          <h2>Create New ticket</h2>

          <div class="well">
            <div>
              <div class="form-group control-label">
                <label for="title">Title</label>
                <input
                  type="text"
                  v-model.trim="$v.form.title.$model"
                  class="form-control"
                  id="title"
                  placeholder="Enter a title for your post"
                  name="title"
                />
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <!-- <textarea
                  v-model.trim="$v.form.content.$model"
                  class="form-control"
                  rows="5"
                  id="content"
                  placeholder="Write your issue"
                  name="content"
                >
                </textarea> -->

                <quill-editor
                  :content="$v.form.content.$model"
                  :imageUrl="photoUrl"
                  @input="onInput($event)"
                ></quill-editor>
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
              <div id="preview">
                <img v-if="photoUrl" :src="photoUrl" />
              </div>
              <button
                type="button"
                @click.prevent="onSubmit"
                class="btn btn-success"
              >
                Send Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { SAVE_TICKET } from '../store/actions.type';
import QuillEditor from '../components/QuillEditor';

export default {
  name: 'Ticket',
  components: {
    QuillEditor
  },

  data() {
    return {
      form: {
        title: '',
        content: '',
        tags: [''],
        photo: {}
      },
      photoUrl: ''
    };
  },

  methods: {
    onSelect() {
      const photo = this.$refs.photo.files[0];
      this.photoUrl = URL.createObjectURL(photo);
      this.form.photo = photo;
    },

    onInput(ev) {
      console.log('on input', ev);
      this.form.content = ev;
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
