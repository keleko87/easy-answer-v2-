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

                <quill-editor @input="onInput($event)"></quill-editor>
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
                  <option v-for="tag in tags" :key="tag">
                    {{ tag }}
                  </option>
                </select>
              </div>

              <div v-if="photoUrl" class="preview-container col-6 p-2 mb-2">
                <div class="preview mx-auto">
                  <img :src="photoUrl" />
                </div>
              </div>

              <div class="form-group">
                <input
                  id="photo"
                  type="file"
                  ref="photo"
                  name="photo"
                  @change="onSelect"
                />
              </div>

              <!-- <div class="form-group">
                <input
                  type="text"
                  id="imageUrl"
                  ref="imageUrl"
                  name="imageUrl"
                  readonly
                  v-model.trim="$v.form.imageUrl.$model"
                />
              </div> -->

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
import { TAGS } from '../common/constants';
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
        imageUrl: '',
        photo: {}
      },
      photoUrl: '',
      tags: TAGS
    };
  },

  methods: {
    onSelect() {
      const photo = this.$refs.photo.files[0];
      this.photoUrl = URL.createObjectURL(photo);
      this.form.photo = photo;
      this.$v.form.imageUrl.$model = this.photoUrl;
    },

    onInput(ev) {
      this.form.content = ev.getHTML;
      this.form.photo = ev.file;
      this.form.imageUrl = ev.file.photoUrl;
    },

    onSubmit() {
      const formData = new FormData();

      formData.append('title', this.form.title);
      formData.append('content', this.form.content);
      formData.append('tags', this.form.tags);
      formData.append('imageUrl', this.form.imageUrl);

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
      imageUrl: {},
      tags: {
        required
      },
      file: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.preview-container {
  border: 1px solid #ccc;

  .preview {

    img {
      width: 100%;
    }
  }
}
</style>
