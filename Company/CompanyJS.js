function CompanyGet(){
  var Company = document.getElementById('CompanyName').value;
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("CompanyNameStorage", Company);
    }

  var CompanyType = document.getElementById('Type').value;
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("CompanyTypeStorage", CompanyType);
    }
}
