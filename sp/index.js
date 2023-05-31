const Create_innerHtml_sendMail = (store, bill) => {
  let innerHTML = "";
  innerHTML = `
  <div class="bill_title" style="width: 100%; margin: 5px auto">
    <h1 style="margin: 0">Mã Đơn Hàng ${bill.code_bill}</h1>
  </div> 
  <div
    class="bill_info"
    style="   
      width: 100%;
      margin: 5px auto;
    "
  >
    <div
      class="bill_item"
      style="
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 5px 15px 5px 0;
      "
    >
      <p style="margin: 0 10px 0 0">Khách hàng:</p>
      <p style="font-weight: bold; color: red; margin: 0">
       ${bill.name.toUpperCase()}
      </p>
    </div>
    <div
      class="bill_item"
      style="
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 5px 15px;
      "
    >
    <p style="margin: 0 10px 0 0">Điện thoại liên lạc:</p>
      <p
        style="font-weight: bold; color: red; margin: 0"
      >
        <a href="tel:${bill.phone}">${bill.phone}</a>
      </p>
    </div>
    <div
      class="bill_item"
      style="
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 5px 15px;
      "
    >
    <p style="margin: 0 10px 0 0">Địa chỉ Email:</p>
      <p
        style="
          font-weight: bold;        
          color: red;         
          margin: 0;
        "
      >
        <a href="mailto:${bill.email}">${bill.email}</a>
      </p>
    </div>
    <div
      class="bill_item"
      style="
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 5px 15px;
      "
    >
    <p style="margin: 0 10px 0 0">Ngày giao hàng:</p>
      <p
        style="font-weight: bold; color: red; margin:0"
      >
        ${bill.dateline}
      </p>
    </div>
    <div
      class="bill_item"
      style="
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 5px 15px;
      "
    >
    <p style="margin: 0 10px 0 0">Hình thức thanh toán:</p>
      <p
        style="font-weight: bold; color: red; margin: 0"
      >
        Thanh toán khi nhận hàng.
      </p>
    </div>
  </div>
  <div
    class="note"
    style="
      width: 100%;
      margin: 5px auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    "
  >
    <p style="margin: 0">Ghi chú:</p>
    <p
      style="font-weight: bold; color: black; margin: 0"
    >
      ${bill.note}
    </p>
  </div> 
  <div
    class="adress"
    style="
      width: 100%;
      margin: 5px auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    "
  >
    <p style="margin: 0">Địa chỉ giao hàng:</p>
    <p style="font-weight: bold; color: red;margin: 0">
     ${bill.adress.toUpperCase()}
    </p>
  </div> 
  <div class="btn_bill" style="width: 100%; margin: 30px auto">
    <a
      href="http://localhost:3000/admin"
      style="
        text-decoration: none;
        background-color: green;
        color: white;
        padding: 20px 15px;
        border-radius: 7px;
      "
      >Kiểm tra đơn hàng</a
    >
  </div> 
  <div
    class="table_header"
    style="
      width: 100%;
      margin: 25px auto 0 auto;
      background-color: green;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
    "
  >
    <p style="width: 10%; text-align: center">#</p>
    <p style="width: 50%; text-align: center">Sản Phẩm</p>   
    <p style="width: 10%; text-align: center">Số lượng</p>  
    <p style="width: 10%; text-align: center">Đơn giá</p>   
    <p style="width: 10%; text-align: center">Thành tiền</p>  
  </div>
  `;
  store.map((item, index) => {
    innerHTML += ` 
    <div
      class="table_item"
      style="
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: black;
        background-color: rgba(221, 220, 220, 0.568);
        border-bottom: 1px solid rgba(128, 128, 128, 0.13);
      "
    >
      <p style="width: 10%; text-align: center">${index + 1}</p>
      <p style="width: 50%; text-align: center">${item.sim.name.toUpperCase()}</p>     
      <p style="width: 10%; text-align: center">${item.count}</p>   
      <p style="width: 10%; text-align: center">${
        Number(item.sim.price) - Number(item.sim.discount)
      }đ</p>      
      <p style="width: 10%; text-align: center">${
        (Number(item.sim.price) - Number(item.sim.discount)) * item.count
      }đ</p>     
    </div>
  `;
  });
  return innerHTML;
};

module.exports = {
  Create_innerHtml_sendMail,
};
