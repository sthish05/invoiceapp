//create invoice

router.post("/", async (req, res) => {
  const invoice = new Invoice(req.body);
  const saved = await invoice.save();
  res.json(saved);
});
 //reat all invoices
 router.get("/", async (req, res) => {
  const all = await Invoice.find();
  res.json(all);
});
//reat invoice by ID
router.get("/", async (req, res) => {
  const all = await Invoice.find();
  res.json(all);
});
//update invoice
router.put("/:id", async (req, res) => {
  const updated = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});
//delete invoice
router.delete("/:id", async (req, res) => {
  await Invoice.findByIdAndDelete(req.params.id);
  res.json({ message: "Invoice Deleted" });
});
//