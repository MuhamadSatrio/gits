import Books from '../models/BookModel.js';
import Users from '../models/UserModel.js';

export const getBookById = async (req, res) => {
  try {
      const response = await Books.findOne({
          where: {
              id: req.params.id,
          },
          attributes: ['id', 'judul', 'tahunTerbit', 'author', 'publisher'],
      });
      res.status(200).json(response);
  } catch (error) {
      console.log(error.message);
  }
}

export const getBooks = async (req, res) => {
  try {
    const response = await Books.findAll({
      attributes: ['id', 'judul', 'tahunTerbit', 'author', 'publisher'],
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const inputBook = async (req, res) => {
  const {
    judul, tahunTerbit, author, publisher,
  } = req.body;
  if (!judul || !tahunTerbit || !author || !publisher) return res.status(400).json({ msg: 'Silahkan isi semua field' });
  const cekAuthor = await Users.findOne({
    where: {
        role : "author",
        id: req.body.author,
    },
  });
  if (!cekAuthor) return res.status(400).json({ msg: 'Author tidak ditemukan, silahkan pilih author yang sesuai' });
  const cekPublisher = await Users.findOne({
    where: {
        role : "publisher",
        id: req.body.publisher,
    },
  });
  if (!cekPublisher) return res.status(400).json({ msg: 'Publisher tidak ditemukan, silahkan pilih author yang sesuai' });
  const bookExists = await Books.findOne({ where: { judul: req.body.judul } });
  if (bookExists) return res.status(400).json({ msg: 'Buku sudah pernah ditambahkan, Silahkan tambahkan buku lain !!!' });
  try {
    await Books.create({
      judul,
      tahunTerbit,
      author,
      publisher,
    });
    res.json({ msg: 'buku berhasil ditambahkan' });
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = async (req, res) => {
  const cekAuthor = await Users.findOne({
    where: {
        role : "author",
        id: req.body.author,
    },
  });
  if (!cekAuthor) return res.status(400).json({ msg: 'Author tidak ditemukan, silahkan pilih author yang sesuai' });
  const cekPublisher = await Users.findOne({
    where: {
        role : "publisher",
        id: req.body.publisher,
    },
  });
  if (!cekPublisher) return res.status(400).json({ msg: 'Publisher tidak ditemukan, silahkan pilih author yang sesuai' });
  try {
      await Books.update(req.body, {
          where: {
              id: req.params.id,
          },
      });
      res.status(200).json({ msg: "buku telah terupdate" });
  } catch (error) {
      console.log(error.message);
  }
}

export const deleteBook = async (req, res) => {
  try {
      await Books.destroy({
          where: {
              id: req.params.id,
          },
      });
      res.status(200).json({ msg: "Buku telah di hapus" });
  } catch (error) {
      console.log(error.message);
  }
}