/* eslint-disable no-const-assign */
let children = [
  {
    id: 'child-01',
    name: 'Masturi Safaat',
    gender: 'laki-laki',
    birthPlace: 'Bekasi',
    birthDate: '2021-04-12',
    height: 80,
    weight: 16,
    parentId: 'parent-01',
    momName: 'Yuyun Yuliana',
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
    height: 80,
    weight: 16,
    parentId: 'parent-02',
    momName: 'Diana Lestari',
    dadName: 'Sultan Wibowo',
    posyanduId: 'pos-02',
    posyanduName: 'Puskesmas Sejahtera',
    idBidan: 'bidan-02',
    bidanName: 'Sri Muna',
    vaccination: 'campak, Polio',
    detail: 'imunisasi polio pada tanggal 14 Desember 2021, imunisasi Polio pada tanggal 14  Februari 2022',
  },
  {
    id: 'child-03',
    name: 'Widah Sari',
    gender: 'Perempuan',
    birthPlace: 'Tegal',
    birthDate: '2021-07-22',
    height: 80,
    weight: 16,
    parentId: 'parent-03',
    momName: 'Umi Dayati',
    dadName: 'Joko Sasongko',
    posyanduId: 'pos-01',
    posyanduName: 'Medika Keluarga',
    idBidan: 'bidan-01',
    bidanName: 'Sinta Dewi',
    vaccination: 'campak, Polio',
    detail: 'imunisasi polio pada tanggal 12 Desember 2021, imunisasi Polio pada tanggal 12  Februari 2022',
  },
  {
    id: 'child-04',
    name: 'Rahayu Tsuki',
    gender: 'Perempuan',
    birthPlace: 'Jepara',
    birthDate: '2021-08-20',
    height: 80,
    weight: 16,
    parentId: 'parent-04',
    momName: 'Riana',
    dadName: 'Leon Tsuki',
    posyanduId: 'pos-01',
    posyanduName: 'Medika Keluarga',
    idBidan: 'bidan-01',
    bidanName: 'Sinta Dewi',
    vaccination: 'campak, Polio',
    detail: 'imunisasi polio pada tanggal 12 Desember 2021, imunisasi Polio pada tanggal 12  Februari 2022',
  },
  {
    id: 'child-05',
    name: 'Masnuaji Hidayat',
    gender: 'laki-laki',
    birthPlace: 'Bekasi',
    birthDate: '2020-04-12',
    height: 80,
    weight: 16,
    parentId: 'parent-05',
    momName: 'Nur Hafizah',
    dadName: 'Agung Setiono',
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
