function sluas() {
    var x = document.getElementById("view-luas");
    var y = document.getElementById("view-keliling");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
}

function skeliling() {
    var x = document.getElementById("view-keliling");
    var y = document.getElementById("view-luas");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
}

function hitungluas() {
  alas=document.getElementById("alas").value;
  tinggi=document.getElementById("tinggi").value;
  luas=0.5*(alas*tinggi)
  document.getElementById("luas").value=luas;
}

function hitungkeliling() {
  ab=document.getElementById("ab").value;
  bc=document.getElementById("bc").value;
  ca=document.getElementById("ca").value;
  keliling=parseInt(ab)+parseInt(bc)+parseInt(ca);
  document.getElementById("keliling").value=keliling;
}