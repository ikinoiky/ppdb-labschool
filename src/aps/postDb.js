import {ref, set } from "firebase/database";
import { db } from "../firebose";


export function DataSiswaPost (nama,nik,alumni,jur1,jur2){
    set(ref(db, 'dataSiswa/' + nik), {
      nama: nama,
      nik: nik,
      alumni: alumni,
      jurusanPertama: jur1,
      jurusanKedua: jur2
    })
    .then(() => {
      console.log("data berhasil di update")
    })
    .catch((error) => {
      console.log("error mengirim data")
    });
  }

export function JurusanPost (nama,nik,alumni,jur1,jur2) {
  
        set(ref(db, 'jurusan' + " " + jur1 + '/' + "jurusan Pertama" + '/' + nik), {
          nama: nama,
          nik: nik,
          alumni: alumni,
          jurusanKedua: jur2
        })
        .then(() => {
          console.log("data jurusan Pertama berhasil di Post")
        })
        .catch((error) => {
          console.log("error mengirim data jurusan pertama")
        });

        set(ref(db, 'jurusan' + " " + jur2 + '/' + "jurusan Kedua" + '/' + nik), {
          nama: nama,
          nik: nik,
          alumni: alumni,
          jurusanPertama: jur1
        })
        .then(() => {
          console.log("data jurusan Kedua berhasil di Post")
        })
        .catch((error) => {
          console.log("error mengirim data jurusan Kedua")
        });
      
  }