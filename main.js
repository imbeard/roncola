import 'uno.css'
import './style.css'
import Alpine from 'alpinejs'
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
//import Collaboration from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
//import { IndexeddbPersistence } from 'y-indexeddb'
//import { WebrtcProvider } from 'y-webrtc'
import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { v4 as uuidv4 } from 'uuid';

/* const rootDoc = new Y.Doc()
const folder = rootDoc.getMap()
const provider = new WebrtcProvider('posts-webrtc', rootDoc)
const postsdb = new IndexeddbPersistence('posts', rootDoc) */
//rootDoc.destroy()

openDB('postsdb', 1, {
    upgrade(db) {
      db.createObjectStore('posts', { keyPath: 'id' });
    },
  });

import WPAPI from "wpapi";

//ANQy YLNX luJ5 tjH4 Csay wcHX

window.Alpine = Alpine
window.WPAPI = WPAPI
window.Editor = Editor
window.StarterKit = StarterKit
window.Image = Image
//window.Collaboration = Collaboration
//window.IndexeddbPersistence = IndexeddbPersistence
window.Y = Y
//window.rootDoc = rootDoc
//window.folder = folder
//window.postsdb = postsdb
window.openDB = openDB
window.uuidv4 = uuidv4
Alpine.start()
