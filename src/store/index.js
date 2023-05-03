import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contact-data'
import serverSlice from './reducers/server-reducer'
import storageSlice from './reducers/storage-reducer'
import softwareSlice from './reducers/software-reducer'
import backupSlice from './reducers/backup-reducer'
import networkSlice from './reducers/network-reducer'
import platformSlice from './reducers/collaboration-platforms-reducer'

export default configureStore({
  reducer: {
    contact: contactReducer,
    servers: serverSlice,
    storages: storageSlice,
    softwares: softwareSlice,
    backups: backupSlice,
    networks: networkSlice,
    platforms: platformSlice,
  },
})