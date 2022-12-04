/* eslint-disable prefer-const */
let bidans = [
  {
    id: 'bidan-01',
    bidanName: 'Simiati Rosidah',
    bidanPhoneNumber: '087855667878',
    address: 'Jl Letjen Haryono MT RT02/RW04 Ds.Majakerata Kec. Watukumpul, Pemalang,Jawa Tengah',
  },
  {
    id: 'bidan-02',
    bidanName: 'Rosmaidah Yusmiasih',
    bidanPhoneNumber: '082399886754',
    address: 'Jl Benda Jaya RT07/RW01 Ds.Majakerata Kec. Watukumpul, Pemalang,Jawa Tengah',
  },
  {
    id: 'bidan-03',
    bidanName: 'Wiwiek Sugiharti',
    bidanPhoneNumber: '082655443214',
    address: 'Jl Letjen Haryono MT RT02/RW04 Ds.Majakerata Kec. Watukumpul, Pemalang,Jawa Tengah',
  },
  {
    id: 'bidan-04',
    bidanName: 'Rihana Dewi',
    bidanPhoneNumber: '087834569876',
    address: 'Jl Letjen Parman RT06/RW04 Ds.Majakerata Kec. Watukumpul, Pemalang,Jawa Tengah',
  },
  {
    id: 'bidan-05',
    bidanName: 'Syahidah',
    bidanPhoneNumber: '082157461999',
    address: 'Jl Kp Sawah 44, RT04/RW03 Ds.Majakerata Kec. Watukumpul, Pemalang,Jawa Tengah',
  },
];

function getAllBidan() {
  return bidans;
}

function getBidan(id) {
  const foundedBidan = bidans.find((bidan) => bidan.id === id);
  return foundedBidan;
}

function addBidan({ bidanName, bidanPhoneNumber, address }) {
  bidans = [...bidans, {
    id: `bidan-${new Date()}`, bidanName: bidanName || '(noname)', bidanPhoneNumber, address,
  }];
}

function deleteBidan(id) {
  bidans = bidans.filter((bidan) => bidan.id !== id);
}

export {
  getAllBidan,
  getBidan,
  addBidan,
  deleteBidan,
};
