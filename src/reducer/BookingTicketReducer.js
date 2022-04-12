import { DAT_GHE } from "../type/BookingTicketType";

const stateDefault = {
  danhSachGheDangDat: [],
};

export const BookingTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        //Khi người dùng click ghế đã đặt đã có trong mảng thì xóa
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        //Khi người dùng click ghế chưa đặt đã có trong mảng thì thêm vào
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case "HUY_GHE": {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        //Khi người dùng click ghế đã đặt đã có trong mảng thì xóa đi
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BookingTicketReducer;
