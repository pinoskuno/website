const formEditData = (data) => `

<div class="row">
<div class="col-md-12">
    <div class="mb-3">
        <label for="namaData" class="form-label">Nama</label>
        <input type="text" class="form-control" name="namaData" id="namaData" aria-label="Nama Data" placeholder="Isikan nama data" value="${data.nama_data}" required>
    </div>
</div>
<div class="mb-3">
  <label for="link" class="form-label">Link Data</label>
  <textarea class="form-control" id="link" placeholder="link Data" rows="4">${data.link}</textarea>
</div>
<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditData">Update Data</button>
</div>
</div>
`;

const formEditMenu = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu}" title="foto data ${data.nama_menu}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu" name="editGambarMenu" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu" id="namaMenu" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu">Update Menu</button>
</div>
</div>
`;

const formEditMenu2 = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu2}" title="foto data ${data.nama_menu2}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu2" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu2" name="editGambarMenu2" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu2" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu2" id="namaMenu2" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu2}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu2">Update Menu</button>
</div>
</div>
`;

const formEditMenu3 = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu3}" title="foto data ${data.nama_menu3}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu3" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu3" name="editGambarMenu3" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu3" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu3" id="namaMenu3" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu3}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu3">Update Menu</button>
</div>
</div>
`;

const formEditMenu4 = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu4}" title="foto data ${data.nama_menu4}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu4" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu4" name="editGambarMenu4" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu4" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu4" id="namaMenu4" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu4}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu4">Update Menu</button>
</div>
</div>
`;

const formEditMenu5 = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu5}" title="foto data ${data.nama_menu5}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu5" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu5" name="editGambarMenu5" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu5" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu5" id="namaMenu5" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu5}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu5">Update Menu</button>
</div>
</div>
`;

export { formEditData, formEditMenu, formEditMenu2, formEditMenu3, formEditMenu4, formEditMenu5 };