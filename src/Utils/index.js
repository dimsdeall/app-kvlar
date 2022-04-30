// export const Endpoint = `http://localhost:3010`
export const Endpoint = `http://103.31.39.48:3010`

export const formatRupiah = (angka, prefix) => {
	let number_string = angka.replace(/[^,\d]/g, '').toString(),
		split = number_string.split(','),
		sisa = split[0].length % 3,
		rupiah = split[0].substr(0, sisa),
		ribuan = split[0].substr(sisa).match(/\d{3}/gi);

	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if (ribuan) {
		let separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}

	rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix === undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

export const formatNormali = (value) => {
	let str = value;
	str = str.replace(/Rp./, "")
		.replace(/\./g, "")
		.replace(/\,/g, ".");
	return str;
}

export const emaiValidation = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
}
