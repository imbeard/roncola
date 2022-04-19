import 'uno.css'
import './style.css'
import Alpine from 'alpinejs'
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import WPAPI from "wpapi";

//ANQy YLNX luJ5 tjH4 Csay wcHX

document.addEventListener("alpine:init", () => {
  Alpine.data("editor", (content) => {
    let editor;

    return {
      // Passing updatedAt here to make Alpine
      // rerender the menu buttons.
      //
      // The value of updatedAt will be updated
      // on every Tiptap transaction.
      //
      isActive(type, opts = {}, updatedAt) {
        return editor.isActive(type, opts);
      },
      toggleBold() {
        editor.chain().toggleBold().focus().run();
      },
      toggleHeading(level) {
        editor.chain().toggleHeading({ level: level }).focus().run();
      },
      updatedAt: Date.now(),
      init() {
        const _this = this;

        editor = new Editor({
          element: this.$refs.editorReference,
          extensions: [StarterKit],
          content: content,
          editorProps: {
              attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
              },
            },
          onCreate({ editor }) {
            _this.updatedAt = Date.now();
          },
          onUpdate({ editor }) {
            _this.updatedAt = Date.now();
          },
          onSelectionUpdate({ editor }) {
            _this.updatedAt = Date.now();
          }          
        });
      }
    };
  });






});

  function postsData(){
    console.log("qui")
      return{
        posts : [],
        getPosts(){
          //wp auth
          var wp = new WPAPI({ endpoint: 'https://www.studiomeme.it/wp-json' });
          wp.posts().get()
            .then(function( data ) {

                this.posts = data
                console.log(this.posts)
            })
            .catch(function( err ) {
                console.log(err)
          });
        },
      }


   }



window.Alpine = Alpine
Alpine.start()
