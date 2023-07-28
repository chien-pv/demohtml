var cds = {
  listcds: [],
  addcd: function (cdObject) {
    this.listcds.push(cdObject);
  },
  countcd: function () {},
  sumcostcd: function () {},
  sortcostcd: function () {},
  sorttilecd: function () {},
};

function CD(code, title, sigle, number, cost) {
  this.code = code;
  this.tile = title;
  this.sigle = sigle;
  this.number = number;
  this.cost = cost;
}

var b = new CD("111", "Bai hay mua dong", "Lương Quang Vĩ", "10", "100000");
var c = new CD("112", "Album mua he", "Nguyen The Vỹ", "10", "200000");
var d = new CD("113", "Album mua thu", "Nguyen The Vỹ", "10", "200000");
var e = new CD("114", "Album mua thu 1", "Nguyen The Vỹ", "10", "200000");
var f = new CD("115", "Album mua thu 2", "Nguyen The Vỹ", "10", "200000");

cds.listcds = [b, c, d, e, f];

function loaddata() {
  var tbody = document.getElementById("cbody");
  var data = "";
  for (const item of cds.listcds) {
    data = data + buidtrdata(item);
  }
  tbody.innerHTML = data;
}

function buidtrdata(item) {
  return (
    "<tr>" +
    "<th scope='row'>" +
    item.code +
    "</th>" +
    "<td>" +
    item.tile +
    "</td>" +
    "<td>" +
    item.sigle +
    "</td>" +
    "<td>" +
    item.number +
    "</td>" +
    "<td>" +
    item.cost +
    "</td>" +
    "<td>" +
    "<button type='button' class='btn btn-outline-danger'>Delete</button>" +
    "<button type='button' class='btn btn-outline-warning'>Edit</button>" +
    "</td>" +
    "</tr>"
  );
}

function addtolistcd() {}
