/**
 * Người tạo: Nguyễn Thành Tuấn
 * Ngày tạo: 2/17/2021
 * Version: 1.0
 */

function LayLoaiXe(){
    var ketqua = "";

    var uberCar = document.getElementById("grabCar").checked;
    var uberSUV = document.getElementById("grabSUV").checked;
    var uberBlack = document.getElementById("grabBlack").checked;

    if (uberCar){
        ketqua = "uberCar";
    } else if (uberSUV){
        ketqua = "uberSUV";
    } else if (uberBlack){
        ketqua = "uberBlack";
    }

    return ketqua;
}

/**
 * Trả về: Tổng số tiền phải trả dựa trên soKM người dùng nhập + thời gian chờ
*/

function TinhTien(){
    var soKM = document.getElementById("soKM").value;
    soKM = parseFloat(soKM);

    var thoiGianCho = document.getElementById("thoiGianCho").value;
    thoiGianCho = parseFloat(thoiGianCho);

    var divThanhTien = document.getElementById("divThanhTien");
    divThanhTien.style.display = "block";
    var spanTien = document.getElementById("xuatTien");

    // Tính tiền tại đây
    var tienThoiGianCho = 0;
    var thanhTien = 0;

    var loaiXe = LayLoaiXe();
    switch (loaiXe){
        case 'uberCar':
            // Tính tiền thời gian chờ
            if(thoiGianCho / 3 < 1){
                tienThoiGianCho = 0;
            } else if (thoiGianCho / 3 >= 1){
                tienThoiGianCho = Math.floor(thoiGianCho / 3) * 2000;
            }
            // Tính tổng tiền
            if(soKM <= 1){
                thanhTien = soKM * 8000 + tienThoiGianCho;
            } else if(soKM > 1 && soKM <= 19){
                thanhTien = 1*8000 + (soKM - 1) * 7500 + tienThoiGianCho;
            } else if(soKM > 19){
                thanhTien =  1*8000 + 18 * 7500 + (soKM - 19) * 7000 + tienThoiGianCho;
            }
            break;
        case 'uberSUV':
            // Tính tiền thời gian chờ
            if(thoiGianCho / 3 < 1){
                tienThoiGianCho = 0;
            } else if (thoiGianCho / 3 >= 1){
                tienThoiGianCho = Math.floor(thoiGianCho / 3) * 3000;
            }
            // Tính tổng tiền
            if(soKM <= 1){
                thanhTien = soKM * 9000 + tienThoiGianCho;
            } else if(soKM > 1 && soKM <= 19){
                thanhTien = 1*9000 + (soKM - 1) * 8500 + tienThoiGianCho;
            } else if(soKM > 19){
                thanhTien =  1*9000 + 18 * 8500 + (soKM - 19) * 8000 + tienThoiGianCho;
            }
            break;
        case 'uberBlack':
            // Tính tiền thời gian chờ
            if(thoiGianCho / 3 < 1){
                tienThoiGianCho = 0;
            } else if (thoiGianCho / 3 >= 1){
                tienThoiGianCho = Math.floor(thoiGianCho / 3) * 3500;
            }
            // Tính tổng tiền
            if(soKM <= 1){
                thanhTien = soKM * 10000 + tienThoiGianCho;
            } else if(soKM > 1 && soKM <= 19){
                thanhTien = 1*10000 + (soKM - 1) * 9500 + tienThoiGianCho;
            } else if(soKM > 19){
                thanhTien =  1*10000 + 18 * 9500 + (soKM - 19) * 9000 + tienThoiGianCho;
            }
            break;
    }

    spanTien.innerHTML = thanhTien;
}