<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <b-icon-type-bold></b-icon-type-bold>
          <!-- <icon name="bold" /> -->
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <!-- <icon name="italic" /> -->
          <b-icon-type-italic></b-icon-type-italic>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <!-- <icon name="strike" /> -->
          <b-icon-type-strikethrough></b-icon-type-strikethrough>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <b-icon-type-underline></b-icon-type-underline>

          <!-- <icon name="underline" /> -->
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <b-icon-code></b-icon-code>

          <!-- <icon name="code" /> -->
        </button>

        <button
          class="menubar__button v-align__text--top"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <span class="menubar__button--icon">p</span>
          <!-- <icon name="paragraph" /> -->
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          <b-icon-type-h1></b-icon-type-h1>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          <b-icon-type-h2></b-icon-type-h2>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          <b-icon-type-h3></b-icon-type-h3>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <!-- <icon name="ul" /> -->
          <b-icon-list-ul></b-icon-list-ul>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <!-- <icon name="ol" /> -->
          <b-icon-list-ol></b-icon-list-ol>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <!-- <icon name="quote" /> -->
          <b-icon-blockquote-left></b-icon-blockquote-left>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <!-- <icon name="code" /> -->
          <b-icon-code-slash></b-icon-code-slash>
        </button>

        <button
          class="menubar__button v-align__text--top"
          @click="commands.horizontal_rule"
        >
          <!-- <icon name="hr" /> -->
          <span class="menubar__button--icon">hr</span>
        </button>

        <button class="menubar__button" @click="commands.undo">
          <!-- <icon name="undo" /> -->
          <b-icon-arrow-counterclockwise></b-icon-arrow-counterclockwise>
        </button>

        <button class="menubar__button" @click="commands.redo">
          <!-- <icon name="redo" /> -->
          <b-icon-arrow-clockwise></b-icon-arrow-clockwise>
          <!-- <b-icon-reply-fill></b-icon-reply-fill> -->
        </button>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions';

export default {
  name: 'quill-editor',

  components: {
    EditorContent,
    EditorMenuBar
  },

  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `
      })
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style lang="scss" scoped>

.menubar {
  &__button {
    font-size: 23px;

    &--icon {
      font-size: 16px;
      width: 24px;
    }
  }

  &__button.v-align__text--top {
    vertical-align: super;
  }
}
</style>
