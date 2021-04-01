import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._devices = [
      {
        id: 1,
        name: "Iphenk2 13 pro100",
        price: 144000,
        rating: 5,
        img:
          "https://cdn.discordapp.com/attachments/449223524209393696/816406854233489489/dBoPoVM42AE.png",
      },
      {
        id: 2,
        name: "Iphank2 13 pro100",
        price: 1000,
        rating: 3,
        img:
          "https://cdn.discordapp.com/attachments/449223524209393696/816406854233489489/dBoPoVM42AE.png",
      },
      {
        id: 3,
        name: "a51",
        price: 94000,
        rating: 5,
        img:
          "https://cdn.discordapp.com/attachments/449223524209393696/816406855949615184/9e4e5196a429e8a8.png",
      },
      {
        id: 4,
        name: "a4",
        price: 940,
        rating: 5,
        img:
          "https://cdn.discordapp.com/attachments/449223524209393696/816406855949615184/9e4e5196a429e8a8.png",
      },
      {
        id: 5,
        name: "aqq4",
        price: 940,
        rating: 5,
        img:
          "https://cdn.discordapp.com/attachments/449223524209393696/816406855949615184/9e4e5196a429e8a8.png",
      },
      {
        id: 6,
        name: "XS",
        price: 90110,
        rating: 2,
        img:
          "https://cdn.discordapp.com/attachments/449223524209393696/816406855949615184/9e4e5196a429e8a8.png",
      },
      {
        id: 7,
        name: "a43",
        price: 940,
        rating: 5,
        img:
          "https://cdn.discordapp.com/attachments/449223524209393696/816406855949615184/9e4e5196a429e8a8.png",
      },
      {
        id: 8,
        name: "a4e",
        price: 940,
        rating: 5,
        img:
          "https://cdn.discordapp.com/attachments/449223524209393696/816406855949615184/9e4e5196a429e8a8.png",
      },
      {
        id: 9,
        name: "keke5",
        price: 94000,
        rating: 23,
        img:
          "https://cdn.discordapp.com/attachments/449223524209393696/816406855949615184/9e4e5196a429e8a8.png",
      },
    ];

    makeAutoObservable(this);
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get devices() {
    return this._devices;
  }
}
