require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const app = express();

/* ===============================
   ROUTE IMPORTS
=============================== */
const authRoutes = require('./routes/auth.routes');
const civilRoutes = require('./routes/civil.routes');
const electronicsRoutes = require('./routes/electronics.routes');
const labourRoutes = require('./routes/labour.routes');
const loanRoutes = require('./routes/loan.routes');
const mechanicalRoutes = require('./routes/mechanical.routes');
const architectRoutes = require('./routes/architect.routes');
const twentyfour = require('./routes/TwentyFour.routes'); 
const equipmentRRoutes = require('./routes/Equipment.routes')
const commercialRoutes = require('./routes/commercialforrent.routes'); 
const othersRoutes = require('./routes/Others.routes'); 
const tenderRoutes = require('./routes/Tenderofco.routes'); 
const adminRoutes = require('./routes/admin.routes');
const materialRoutes = require('./routes/Materialsupp.routes')
/* ===============================
   MIDDLEWARE
=============================== */
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

/* ===============================
   STATIC FILES
=============================== */
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/* ===============================
   ROOT
=============================== */
app.get('/', (_req, res) => {
  res.json({ ok: true, name: 'Construction Expert API' });
});

/* ===============================
   ROUTES
=============================== */
app.use('/auth', authRoutes);
app.use('/civil', civilRoutes);
app.use('/electronics', electronicsRoutes);
app.use('/labour', labourRoutes);
app.use('/loan', loanRoutes);
app.use('/mechanical', mechanicalRoutes);
app.use('/architect', architectRoutes); 
app.use('/twentyfour', twentyfour); 
app.use('/equipment', equipmentRRoutes); 
app.use('/commercial', commercialRoutes); 
app.use('/others', othersRoutes); 
app.use('/tender', tenderRoutes);
app.use('/admin', adminRoutes);
app.use('/material' , materialRoutes)
/* ===============================
   GLOBAL ERROR HANDLER
=============================== */
app.use((err, _req, res, _next) => {
  console.error('Global Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server error',
  });
});

module.exports = app;
