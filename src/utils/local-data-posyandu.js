/* eslint-disable prefer-const */
let posyandus = [
  {
    id: 'posyadu-01',
    namePosyandu: 'Posyandu Delima',
    address: 'Jl Benda Jaya RT07/RW01 Ds.Majakerata Kec. Watukumpul, Pemalang,Jawa Tengah',
    bidanId: 'bidan-01',
    leader: 'Simiati Rosidah',
    coLeader: 'Nurmawati',
    secretary: 'Lulu',
    treasurer: 'Sari',
    eventDate: '15 Setiap Bulan',
  },
  {
    id: 'posyadu-02',
    namePosyandu: 'Posyandu Melati Balita',
    address: 'Jl Letjen Haryono MT RT02/RW04 Ds.Majakerata Kec. Watukumpul, Pemalang,Jawa Tengah',
    bidanId: 'bidan-02',
    leader: 'Rosmaidah Yusmiasih',
    coLeader: 'Sunarti',
    secretary: 'Sri Dwi Safaryanti',
    treasurer: 'Estu Ningsih',
    eventDate: '20 Setiap Bulan',
  },
  {
    id: 'posyadu-03',
    namePosyandu: 'Posyandu Bintang',
    address: 'Jl Kp Sawah 44, RT04/RW03 Ds.Majakerata Kec. Watukumpul, Pemalang,Jawa Tengah',
    bidanId: 'bidan-03',
    leader: 'Wiwiek Sugiharti',
    coLeader: 'Sumarsih',
    secretary: 'Siti Fatimah',
    treasurer: 'Itta Darthanila',
    eventDate: '10 Setiap Bulan',
  },
  {
    id: 'posyadu-04',
    namePosyandu: 'Posyandu Al-Hidayah',
    address: 'Jl Letjen Parman RT06/RW04 Ds.Majakerata Kec. Watukumpul, Pemalang,Jawa Tengah',
    bidanId: 'bidan-04',
    leader: 'Rihana Dewi',
    coLeader: 'Reni Astuti',
    secretary: 'Paulina',
    treasurer: 'Ety Menti',
    eventDate: '25 Setiap Bulan',
  },
  {
    id: 'posyadu-05',
    namePosyandu: 'Posyandu Asoka Putih',
    address: 'Jl Bintaro Permai 9, RT08/RW05 Ds.Majakerata Kec. Watukumpul, Pemalang,Jawa Tengah',
    bidanId: 'bidan-05',
    leader: 'Syahidah',
    coLeader: 'Sri Murni',
    secretary: 'Samsiah',
    treasurer: 'Endang Wahyuningsih',
    eventDate: '05 Setiap Bulan',
  },
];

function getAllPosyandu() {
  return posyandus;
}

function getPosyandu(id) {
  const foundedPosyandu = posyandus.find((posyandu) => posyandu.id === id);
  return foundedPosyandu;
}

function addPosyandu({
  namePosyandu,
  address,
  leader,
  coLeader,
  secretary,
  treasurer,
  eventDate,
}) {
  posyandus = [...posyandus, {
    id: `posyandu-${new Date()}`, namePosyandu: namePosyandu || '(noname)', address, leader, bidanId: `bidan-${new Date()}`, coLeader, secretary, treasurer, eventDate,
  }];
}

export { getAllPosyandu, getPosyandu, addPosyandu };
