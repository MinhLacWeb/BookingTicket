import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookingTicket.css'
import { huyGheAction } from '../action/BookingTicketAction';

 class ThongTinDatGhe extends Component {
  render() {
    return (
        <div>
        <div className="mt-5" >
            <button className="gheDuocChon" ></button>
            <span className="text-light" style={{ fontSize: "30px" }}>
              Ghế đã đặt
            </span>
            <br />
            <button className="gheDangChon"></button>
            <span className="text-light" style={{ fontSize: "30px" }}>
              Ghế đang đặt
            </span>
            <br />
            <button className="ghe" style={{ marginLeft: 0 }}></button>
            <span className="text-light" style={{ fontSize: "30px" }}>
              Ghế chưa đặt
            </span>
            <br />
        </div>
    
       <div className="mt-5" >
          <table className="table" border='3'>
            <thead>
              <tr className="text-light" style={{fontSize:'25px'}}>
                <th>Số ghế</th>
                <th>Gía</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-warning'>
              {this.props.danhSachGheDangDat.map((gheDangDat,index)=> {
                return <tr key={index}>
                        <td>{gheDangDat.soGhe}</td>
                        <td>{gheDangDat.gia}</td>
                        <td><button onClick={()=> {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                        }}>Hủy</button></td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr>
                <td> </td>
                <td>Tổng tiền</td>
                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                  return tongTien += gheDangDat.gia;
                }, 0)}
                  </td>
              </tr>
            </tfoot>
          </table>
       </div>
    </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat
  }
}

export default connect(mapStatetoProps)(ThongTinDatGhe);
