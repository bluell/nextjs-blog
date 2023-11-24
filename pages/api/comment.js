export default function handler(req, res) {
  console.log('============================================');
  console.log('req:', req);
  console.log('============================================');
  console.log('res:', res);
  console.log('============================================');
  res.status(200).json({
    status: 'success',
  });
}
