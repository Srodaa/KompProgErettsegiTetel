function Letoltes() {
  var text = document.getElementById("textArea").value;
  text = text.replace(/\n/g, "\r\n");
  var blob = new Blob([text], { type: "text/plain" });
  var anchor = document.createElement("a");
  anchor.download = "Tételem.txt";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target = "_blank";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

function Eredmeny() {

  var sza = parseInt(document.getElementById("1").value);
  var szb = parseInt(document.getElementById("2").value);
  var szc = parseInt(document.getElementById("3").value);
  var szd = parseInt(document.getElementById("4").value);
  var sze = parseInt(document.getElementById("5").value);
  var szr = parseInt(document.getElementById("6").value);
  var szg = parseInt(document.getElementById("7").value);
  var szh = parseInt(document.getElementById("8").value);
  var szi = parseInt(document.getElementById("9").value);

  var q = parseInt(document.getElementById("10").value);
  var w = parseInt(document.getElementById("11").value);
  var e = parseInt(document.getElementById("12").value);
  var r = parseInt(document.getElementById("13").value);
  var t = parseInt(document.getElementById("14").value);
  var z = parseInt(document.getElementById("15").value);
  var u = parseInt(document.getElementById("16").value);
  var i = parseInt(document.getElementById("17").value);
  var o = parseInt(document.getElementById("18").value);
  var p = parseInt(document.getElementById("19").value);
  var a = parseInt(document.getElementById("20").value);
  var s = parseInt(document.getElementById("21").value);
  var d = parseInt(document.getElementById("22").value);
  var f = parseInt(document.getElementById("23").value);
  var g = parseInt(document.getElementById("24").value);
  var h = parseInt(document.getElementById("25").value);
  var j = parseInt(document.getElementById("26").value);
  var k = parseInt(document.getElementById("27").value);
  var l = parseInt(document.getElementById("28").value);
  var y = parseInt(document.getElementById("29").value);
  var x = parseInt(document.getElementById("30").value);
  var c = parseInt(document.getElementById("31").value);
  var v = parseInt(document.getElementById("32").value);
  var b = parseInt(document.getElementById("33").value);
  var n = parseInt(document.getElementById("34").value);
  var m = parseInt(document.getElementById("35").value);
  var iq = parseInt(document.getElementById("36").value);
  var iw = parseInt(document.getElementById("37").value);
  var ie = parseInt(document.getElementById("38").value);
  var ir = parseInt(document.getElementById("39").value);
  var it = parseInt(document.getElementById("40").value);
  var iz = parseInt(document.getElementById("41").value);
  var iu = parseInt(document.getElementById("42").value);
  var ii = parseInt(document.getElementById("43").value);
  var io = parseInt(document.getElementById("44").value);
  var ip = parseInt(document.getElementById("45").value);
  var ia = parseInt(document.getElementById("46").value);
  var is = parseInt(document.getElementById("47").value);
  var id = parseInt(document.getElementById("48").value);
  var ig = parseInt(document.getElementById("49").value);
  var ih = parseInt(document.getElementById("50").value);
  var ij = parseInt(document.getElementById("51").value);
  var ik = parseInt(document.getElementById("52").value);
  var il = parseInt(document.getElementById("53").value);
  var iy = parseInt(document.getElementById("54").value);
  var ix = parseInt(document.getElementById("55").value);
  var ic = parseInt(document.getElementById("56").value);
  var iv = parseInt(document.getElementById("57").value);
  var ib = parseInt(document.getElementById("58").value);
  var im = parseInt(document.getElementById("59").value);
  var iiq = parseInt(document.getElementById("60").value);
  var iiw = parseInt(document.getElementById("61").value);
  var iie = parseInt(document.getElementById("62").value);
  var iir = parseInt(document.getElementById("63").value);
  var iit = parseInt(document.getElementById("64").value);
  var iiz = parseInt(document.getElementById("65").value);
  var iiu = parseInt(document.getElementById("66").value);
  var iii = parseInt(document.getElementById("67").value);
  var iio = parseInt(document.getElementById("68").value);
  var iip = parseInt(document.getElementById("69").value);



  var szobelipontszam = sza + szb + szc + szd + sze + szr + szg + szh + szi;
  document.getElementById("szobelipontszam").innerHTML = szobelipontszam;

  var irasbelipontszam = q + w + e + r + t + z + u + i + o + p + a + s + d + f + g + h + j + k + l + y + x + c + v + b + n + m + iq + iw + ie + ir + it + iz + iu + ii + io + ip + ia + is + id + ig + ih + ij + ik + il + iy + ix + ic + iv + ib + im + iiq + iiw + iie + iir + iit + iiz + iiu + iii + iio + iip;
  document.getElementById("irasbelipontszam").innerHTML = irasbelipontszam;

  var osszesitettvegeredmeny = szobelipontszam + irasbelipontszam;
  document.getElementsByName("osszesitettvegeredmeny").innerHTML = osszesitettvegeredmeny;
  var irasbeliszazalek = irasbelipontszam / 135 * 100;
  var szobeliszazalek = szobelipontszam / 30 * 100;

  var szazalek = osszesitettvegeredmeny / 165 * 100;
  document.getElementById("vegeredmeny").innerHTML = osszesitettvegeredmeny + " pont, " + szazalek.toFixed(2) + "%";
  if (szazalek > 80 && szobeliszazalek > 12 && irasbeliszazalek > 12 ) {
    document.getElementById("erdemjegy").innerHTML = "5"
  }
  else if (szazalek > 60 && szobeliszazalek > 12 && irasbeliszazalek > 12) {
    document.getElementById("erdemjegy").innerHTML = "4"
  }
  else if (szazalek > 40 && szobeliszazalek > 12 && irasbeliszazalek > 12) {
    document.getElementById("erdemjegy").innerHTML = "3"
  }
  else if (szazalek > 25 && szobeliszazalek > 12 && irasbeliszazalek > 12) {
    document.getElementById("erdemjegy").innerHTML = "2"
  }
  else {
    document.getElementById("erdemjegy").innerHTML = "1"
  }
}



