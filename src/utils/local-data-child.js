/* eslint-disable no-const-assign */
let children = [
  {
    id: 'child-01',
    name: 'Masturi Safaat',
    gender: 'laki-laki',
    birthPlace: 'Bekasi',
    birthDate: '2021-04-12',
    momId: 'mom-01',
    momName: 'Yuyun Yuliana',
    dadId: 'dad-01',
    dadName: 'Anung Nugraha',
    posyanduId: 'pos-01',
    posyanduName: 'Medika Keluarga',
    idBidan: 'bidan-01',
    bidanName: 'Sinta Dewi',
    vaccination: 'campak, Polio',
    detail: 'imunisasi polio pada tanggal 12 Desember 2021, imunisasi Polio pada tanggal 12  Februari 2022',
  },
  {
    id: 'child-02',
    name: 'Lusef',
    gender: 'laki-laki',
    birthPlace: 'Depok',
    birthDate: '2022-04-09',
    momId: 'mom-02',
    momName: 'Diana Lestari',
    dadId: 'dad-02',
    posyanduId: 'pos-02',
    posyanduName: 'Puskesmas Sejahtera',
    idBidan: 'bidan-02',
    bidanName: 'Sri Muna',
    vaccination: 'campak, Polio',
    detail: 'imunisasi polio pada tanggal 14 Desember 2021, imunisasi Polio pada tanggal 14  Februari 2022',
  },
  {
    id: 'child-3',
    name: 'Widah Sari',
    gender: 'Perempuan',
    birthPlace: 'Tegal',
    birthDate: '2021-07-22',
    momId: 'mom-03',
    momName: 'Umi Dayati',
    dadId: 'dad-03',
    dadName: 'Joko Sasongko',
    posyanduId: 'pos-01',
    posyanduName: 'Medika Keluarga',
    idBidan: 'bidan-01',
    bidanName: 'Sinta Dewi',
    vaccination: 'campak, Polio',
    detail: 'imunisasi polio pada tanggal 12 Desember 2021, imunisasi Polio pada tanggal 12  Februari 2022',
  },
  {
    id: 'child-4',
    name: 'Rahayu Tsuki',
    gender: 'Perempuan',
    birthPlace: 'Jepara',
    birthDate: '2021-08-20',
    momId: 'mom-4',
    momName: 'Riana',
    dadId: 'dad-4',
    dadName: 'Leon Tsuki',
    posyanduId: 'pos-01',
    posyanduName: 'Medika Keluarga',
    idBidan: 'bidan-01',
    bidanName: 'Sinta Dewi',
    vaccination: 'campak, Polio',
    detail: 'imunisasi polio pada tanggal 12 Desember 2021, imunisasi Polio pada tanggal 12  Februari 2022',
  },
  {
    id: 'child-5',
    name: 'Masnuaji Hidayat',
    gender: 'laki-laki',
    birthPlace: 'Bekasi',
    birthDate: '2020-04-12',
    height: 80,
    weight: 16,
    momId: 'mom-05',
    momName: 'Nur Hafizah',
    dadId: 'dad-05',
    dadName: 'Agung Setion',
    posyanduId: 'pos-02',
    posyanduName: 'Puskesmas Sejahtera',
    idBidan: 'bidan-02',
    bidanName: 'Sri Muna',
    vaccination: 'campak, Polio',
    detail: 'imunisasi polio pada tanggal 14 Desember 2021, imunisasi Polio pada tanggal 14  Februari 2022',
  },
];

function getAllChildern() {
  return children;
}

function getChild(id) {
  const foundedChild = children.find((child) => child.id === id);
  return foundedChild;
}

function addChild({
  name,
  gender,
  birthPlace,
  birthDate,
  momId,
  dadId,
  posyanduId,
}) {
  children = [...children, {
    id: `children-${+new Date()}`,
    name: name || '(untitled)',
    gender,
    birthPlace,
    birthDate,
    momId,
    dadId,
    posyanduId,
  }];
}
function removeChild(id) {
  children = children.filter((child) => child.id !== id);
}

export {
  getAllChildern,
  getChild,
  addChild,
  removeChild,
};
