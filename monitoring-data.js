// Data ditranskripsi dari tiga gambar monitoring per 25 September 2026.
// Urutan metrik: fisik lalu, keuangan lalu, rencana fisik/keuangan,
// realisasi fisik/keuangan, selisih fisik-keuangan, deviasi fisik/keuangan,
// progres mingguan fisik/keuangan.
const extraMonitoring = {
  'reguler-kontraktual': {
    total: [142902876000,[57.25,53.94,63.13,61.96,60,58.61,1.39,-3.13,-3.35,2.75,4.67]],
    groups: [
      {balai:'BBWS NUSA TENGGARA I',head:'Nugradi Dwi Isworo, S.T.',budget:24228654000,metrics:[77.54,75.62,70.66,59.14,79.69,76.39,3.30,9.04,17.25,2.16,0.77],satker:'SNVT ATAB BBWS Nusa Tenggara I',items:[
        ['Rehabilitasi Sistem Penyediaan Air Baku Semongkat di Kabupaten Sumbawa; 5,5 Km',23293558000,'Bashori, S.T., M.T.',[77.60,76.25,70.36,57.50,79.62,76.25,3.37,9.26,18.75,2.02,0]],
        ['Supervisi Rehabilitasi Sistem Penyediaan Air Baku Semongkat di Kabupaten Sumbawa',935096000,'Bashori, S.T., M.T.',[75.98,60,78.04,100,81.55,80,1.55,3.51,-20,5.57,20]]
      ]},
      {balai:'BBWS NUSA TENGGARA II',head:'Parlinggoman Simanungkalit, S.T., MPSDA',budget:1397704000,metrics:[100,80,100,100,100,100,0,0,0,0,20],satker:'Satker BBWS Nusa Tenggara II',items:[
        ['Detail Engineering Design (DED) Embung Serba Guna Kameli Mabu di Kabupaten Sumba Tengah',702182000,'Ahmad Riadi, S.T.',[100,80,100,100,100,100,0,0,0,0,20]],
        ['Detail Engineering Design (DED) Embung Serba Guna Lai Tabuk di Kabupaten Sumba Tengah',695522000,'Ahmad Riadi, S.T.',[100,80,100,100,100,100,0,0,0,0,20]]
      ]},
      {balai:'BWS KALIMANTAN I',head:'Taufan Adrianto, S.T.',budget:39332831000,metrics:[52.49,50.81,68.60,75.80,59.83,61.52,-1.69,-8.78,-14.28,7.34,10.71],satker:'SNVT PJPA BWS Kalimantan I',items:[
        ['Supervisi Pembangunan Embung Limau Manis di Kec. Pulau Maya Kab. Kayong Utara',340012000,'Jeffry Johny Polli, S.T.',[100,65,100,100,100,100,0,0,0,0,35]],
        ['Supervisi Pembangunan Embung Harapan Mulia di Kec. Sukadana Kab. Kayong Utara',318420000,'Jeffry Johny Polli, S.T.',[85.16,65,90.26,100,87.81,65,22.81,-2.45,-35,2.65,0]],
        ['Pembangunan Embung Limau Manis di Kec. Pulau Maya Kab. Kayong Utara',2329516000,'Jeffry Johny Polli, S.T.',[100,85.50,100,100,100,85.50,14.50,0,-14.50,0,0]],
        ['Pembangunan Embung Harapan Mulia di Kec. Sukadana Kab. Kayong Utara',5456447000,'Jeffry Johny Polli, S.T.',[84.38,71.25,93.22,80,92.10,71.25,20.85,-1.12,-8.75,7.72,0]],
        ['Rehabilitasi Embung Pangkaran Kab. Kapuas Hulu',13742437000,'Jeffry Johny Polli, S.T.',[12.58,30,26.23,70,22.45,41.50,-19.05,-3.78,-28.50,9.87,11.50]],
        ['Supervisi Penyempurnaan Intake dan Rumah Pompa Air Baku Penepat Kabupaten Kubu Raya',397867000,'Jeffry Johny Polli, S.T.',[60.88,65,63.47,70,63.86,65,-1.14,0.39,-5,2.98,0]],
        ['Penyempurnaan Intake dan Rumah Pompa Air Baku Penepat Kabupaten Kubu Raya',16748132000,'Jeffry Johny Polli, S.T.',[66.45,55.50,90.06,75,72.95,70.50,2.45,-17.11,-4.50,6.50,15]]
      ]},
      {balai:'BWS KALIMANTAN II',head:'Yakubson, S.T., M.T.',budget:31980569000,metrics:[60.13,60,65.60,52,62.50,60,2.50,-3.10,8,2.37,0],satker:'SNVT PJPA I BWS Kalimantan II',items:[
        ['Pembangunan Penyediaan Air Baku Pangkalan Banteng',31980569000,'Muhammad Kafid Maskuri, S.T., M.T.',[60.13,60,65.60,52,62.50,60,2.50,-3.10,8,2.37,0]]
      ]},
      {balai:'BWS KALIMANTAN III',head:'Devi Sri Maulana, S.T., M.T.',budget:1032710000,metrics:[100,47.78,69.54,60,100,47.78,52.22,30.46,-12.22,0,0],satker:'SNVT PJPA BWS Kalimantan III',items:[
        ['Supervisi Pembangunan Embung Jaro Kabupaten Tabalong (Lanjutan)',1032710000,'Khoiron, S.ST., M.T.',[100,47.78,69.54,60,100,47.78,52.22,30.46,-12.22,0,0]]
      ]},
      {balai:'BWS KALIMANTAN IV',head:'Indrasto Dwicahyo, S.T., MPSDA',budget:2989020000,metrics:[76.85,73.20,68.99,78.50,82.41,73.20,9.21,13.42,-5.30,5.56,0],satker:'SNVT PJPA BWS Kalimantan IV',items:[
        ['Supervisi Pembangunan Sumur Dalam Kota Balikpapan',365927000,'Noor Syaidah, S.T.',[92.69,80,100,100,97.73,80,17.73,-2.27,-20,5.04,0]],
        ['Pembangunan Sumur Dalam Kota Balikpapan',2623093000,'Noor Syaidah, S.T.',[74.64,72.25,64.66,75.50,80.27,72.25,8.02,15.61,-3.25,5.63,0]]
      ]},
      {balai:'BWS KALIMANTAN V',head:'Eddy Syofiansyah, S.T., M.T.',budget:20649722000,metrics:[16.09,24.22,18.58,34.65,19.24,33.91,-14.67,0.66,-0.74,3.15,9.68],satker:'SNVT PJPA BWS Kalimantan V',items:[
        ['Supervisi Optimalisasi Prasarana Intake Kanal Rinding Kabupaten Berau; Kalimantan Timur',540427000,'Suyudi Akbari Habibi, S.T.',[52.51,18.93,56.23,56.23,52.85,49.21,3.64,-3.38,-7.02,0.34,30.28]],
        ['Supervisi Rehabilitasi Intake Sungai Kayan Kabupaten Bulungan; Kalimantan Utara',784000000,'Suyudi Akbari Habibi, S.T.',[51.01,41.65,51.80,56.23,53.27,41.65,11.62,1.47,-14.58,2.26,0]],
        ['Optimalisasi Prasarana Intake Kanal Rinding Kabupaten Berau; Kalimantan Timur',7083657000,'Suyudi Akbari Habibi, S.T.',[8.91,30,8.38,30,9.16,30,-20.84,0.78,0,0.25,0]],
        ['Rehabilitasi Intake Sungai Kayan Kabupaten Bulungan; Kalimantan Utara',12241638000,'Suyudi Akbari Habibi, S.T.',[16.40,20,20.69,35,21.41,35,-13.59,0.72,0,5.01,15]]
      ]},
      {balai:'BWS MALUKU',head:'Ir. Irfan Badhillah Rery, S.T., M.T.',budget:15644406000,metrics:[66.05,41.21,81.03,75,66.05,41.21,24.83,-14.99,-33.79,0,0],satker:'SNVT PJPA BWS Maluku',items:[
        ['Supervisi Pembangunan Jembatan Perlintasan Pipa Jaringan Transmisi Air Baku Noa Nea, Kec. Amahai, Kab. Maluku Tengah (Lanjutan)',759740000,'Herry Pancara Budhi, S.T.',[75.95,65,78.51,75,75.95,65,10.95,-2.56,-10,0,0]],
        ['Pembangunan Jembatan Perlintasan Pipa Jaringan Transmisi Air Baku Noa Nea, Kec. Amahai, Kab. Maluku Tengah (Lanjutan)',14884666000,'Herry Pancara Budhi, S.T.',[65.54,40,81.16,75,65.54,40,25.54,-15.62,-35,0,0]]
      ]},
      {balai:'BWS MALUKU UTARA',head:'Irnanda Kristandi, S.T.',budget:5647260000,metrics:[84.52,76.80,78.52,80,85.76,76.80,8.96,7.24,-3.20,1.24,0],satker:'SNVT PJPA BWS Maluku Utara',items:[
        ['Rehabilitasi Unit Air Baku Wongongira; Maluku Utara; Kab. Halmahera Utara',5647260000,'Edi Sukirman, S.T., M.T.',[84.52,76.80,78.52,80,85.76,76.80,8.96,7.24,-3.20,1.24,0]]
      ]}
    ]
  },
  'reguler-swakelola': {
    total:[37704995000,[95.57,90.50,84.74,89.82,95.84,92.18,3.66,11.10,2.36,0.27,1.68]],
    groups:[
      {balai:'BBWS NUSA TENGGARA I',head:'Nugradi Dwi Isworo, S.T.',budget:2699999000,metrics:[100,99.28,100,100,100,99.28,0.72,0,-0.72,0,0],satker:'SNVT ATAB BBWS Nusa Tenggara I',items:[
        ['Pembangunan Jaringan Air Baku di Desa Aik Bukak Kecamatan Batuk Kliang Kabupaten Lombok Tengah',2699999000,'Bashori, S.T., M.T.',[100,99.28,100,100,100,99.28,0.72,0,-0.72,0,0]]
      ]},
      {balai:'BBWS NUSA TENGGARA II',head:'Djoniur S Doga, S.T.',budget:23624996000,metrics:[96.67,88.72,79.04,86.98,96.80,91.08,5.72,17.76,4.10,0.13,2.36],satker:'SNVT ATAB BBWS Nusa Tenggara II',items:[
        ['Pembangunan Sumur Air Tanah untuk Air Baku di Kabupaten Ende (Swakelola)',1574999000,'Frits. I. Y. Maramis, S.ST.',[98,94.40,74.54,86.28,98,94.40,3.60,23.46,8.12,0,0]],
        ['Pembangunan Sumur Air Tanah untuk Air Baku di Pulau Sumba (Swakelola)',3150001000,'Isak Mesah, S.ST., M.Si., M.T.',[88,87.84,75,93.07,89,87.84,1.16,14,-5.23,1,0]],
        ['Pembangunan Jaringan Irigasi Air Tanah (JIAT) di Pulau Timor (Swakelola)',3149999000,'Daud W Djami, S.ST.',[98,83.56,90.57,82.06,98,88.62,9.38,7.43,6.56,0,5.06]],
        ['Pembangunan Jaringan Irigasi Air Tanah (JIAT) di Flores Bagian Timur (Swakelola)',1574999000,'Frits. I. Y. Maramis, S.ST.',[98,95.10,60.22,92.48,98,95.10,2.90,37.78,2.62,0,0]],
        ['Pembangunan Jaringan Irigasi Air Tanah (JIAT) di Pulau Sumba (Swakelola)',1574999000,'Isak Mesah, S.ST., M.Si., M.T.',[98,90.50,75,90.67,98,90.50,7.50,23,-0.17,0,0]],
        ['Pembangunan Sumur Air Tanah untuk Air Baku di Pulau Timor (Swakelola)',3150001000,'Daud W Djami, S.ST.',[98,82.42,91.80,91.87,98,90.02,7.98,6.20,-1.85,0,7.60]],
        ['Rehabilitasi dan Peningkatan Air Tanah untuk Air Baku di Pulau Timor dan Kepulauan',3779998000,'Daud W Djami, S.ST.',[98,90.39,92.36,80.56,98,94.61,3.39,5.64,14.05,0,4.22]],
        ['Rehabilitasi dan Peningkatan Air Tanah untuk Air Baku di Pulau Flores Bagian Timur dan Kepulauannya',2835000000,'Frits. I. Y. Maramis, S.ST.',[98,95.91,58.02,77.66,98,95.91,2.09,39.98,18.25,0,0]],
        ['Rehabilitasi dan Peningkatan Air Tanah untuk Air Baku di Pulau Sumba',2835000000,'Isak Mesah, S.ST., M.Si., M.T.',[98,85.29,75,93.41,98,85.29,12.71,23,-8.12,0,0]]
      ]},
      {balai:'BWS KALIMANTAN I',head:'Taufan Adrianto, S.T.',budget:4100000000,metrics:[92.97,92.87,93.44,93.90,93.06,93.05,0.01,-0.38,-0.85,0.09,0.19],satker:'SNVT PJPA BWS Kalimantan I',items:[
        ['Supervisi Rehabilitasi Embung Pangkaran Kab. Kapuas Hulu',800000000,'Jeffry Johny Polli, S.T.',[63.97,63.97,66.39,68.75,64.44,64.92,-0.48,-1.95,-3.83,0.47,0.95]],
        ['Pembangunan Akuifer Buatan Simpanan Air Hujan (ABSAH) Kab. Kubu Raya',3300000000,'Jeffry Johny Polli, S.T.',[100,99.87,100,100,100,99.87,0.13,0,-0.13,0,0]]
      ]},
      {balai:'BWS KALIMANTAN II',head:'Yakubson, S.T., M.T.',budget:1280000000,metrics:[53.53,53.53,58.41,60,58.78,58.78,0,0.37,-1.22,5.25,5.25],satker:'SNVT PJPA I BWS Kalimantan II',items:[
        ['Supervisi Pembangunan Air Baku Pangkalan Banteng',1280000000,'Muhammad Kafid Maskuri, S.T., M.T.',[53.53,53.53,58.41,60,58.78,58.78,0,0.37,-1.22,5.25,5.25]]
      ]},
      {balai:'BWS MALUKU UTARA',head:'Irnanda Kristandi, S.T.',budget:6000000000,metrics:[100,99.85,100,100,100,99.85,0.16,0,-0.16,0,0],satker:'SNVT PJPA BWS Maluku Utara',items:[
        ['Pembangunan Sumur Air Tanah Mendukung Sekolah Rakyat di Desa Kukumutuk Kabupaten Halmahera Utara; Maluku Utara',3000000000,'Edi Sukirman, S.T., M.T.',[100,99.85,100,100,100,99.85,0.15,0,-0.15,0,0]],
        ['Pembangunan Sumur Air Tanah Mendukung Sekolah Rakyat di Desa Rioribati Kabupaten Halmahera Barat; Maluku Utara',3000000000,'Edi Sukirman, S.T., M.T.',[100,99.84,100,100,100,99.84,0.16,0,-0.16,0,0]]
      ]}
    ]
  },
  'kekeringan-kontraktual': {
    total:[8200000000,[0,0,13.66,13.66,0,0,0,-13.66,-13.66,0,0]],
    groups:[
      {balai:'BBWS NUSA TENGGARA I',head:'Nugradi Dwi Isworo, S.T.',budget:2600000000,metrics:[0,0,0,0,0,0,0,0,0,0,0],satker:'SNVT ATAB BBWS Nusa Tenggara I',items:[
        ['Pengadaan Mobil Tanki dan Pompa untuk Daerah Rawan Kekeringan',2600000000,'Bashori, S.T., M.T.',[0,0,0,0,0,0,0,0,0,0,0]]
      ]},
      {balai:'BWS MALUKU',head:'Ir. Irfan Badhillah Rery, S.T., M.T.',budget:5600000000,metrics:[0,0,20,20,0,0,0,-20,-20,0,0],satker:'SNVT PJPA BWS Maluku',items:[
        ['Rehabilitasi Embung Pendidikan Universitas Pattimura Kota Ambon; 1 Unit; 1 Unit; F; K; SYC',5600000000,'Ir. Geri Ramdhan Dazali, S.T., MPSDA',[0,0,20,20,0,0,0,-20,-20,0,0]]
      ]}
    ]
  }
};
