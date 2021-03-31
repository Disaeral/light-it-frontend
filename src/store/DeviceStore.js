import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Смартфоны" },
      { id: 2, name: "Холодильники" },
      { id: 3, name: "Телевизоры" },
      { id: 4, name: "Компьютеры" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Samsung" },
      { id: 3, name: "Huawei" },
      { id: 4, name: "Sony" },
    ];
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
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDrands(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
      return this._selectedBrand
  }
}
