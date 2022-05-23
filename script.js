function tampilData(){
	var nama1 = document.getElementById("nama-depan").value;
	var nama2 = document.getElementById("nama-belakang").value;
	var email = document.getElementById("email").value;
	var no_hp = document.getElementById("no_hp").value;
	var alamat = document.getElementById("alamat").value;
	var barang = document.getElementsByName("barang");
	var daftarBarang = ''
	var pengiriman = document.querySelector("input[name=shipping]:checked").value;
	var tanggal = document.getElementById("tanggal").value;
	var note = document.getElementById("note").value;

	for (var barang2 of barang){
		if(barang2.checked){
			daftarBarang += ', '+ barang2.value
		}
	}

	daftarBarang = daftarBarang.substring(1)

	alert(
		"Nama               : "+nama1+" "+nama2+
		"\nEmail             : "+email+
		"\nNomor Hp.         : "+no_hp+
		"\nAlamat            : "+alamat+
		"\nBarang            : "+daftarBarang+
		"\nPengiriman        : "+pengiriman+
		"\nTanggal Pelunasan : "+tanggal+
		"\nCatatan           : "+note
	);
}

