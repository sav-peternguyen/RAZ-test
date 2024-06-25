const express = require('express');
const config = require('./config');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const gameRouter = require('./routers/gameRouter');
const errorHandler = require('./middlewares/errorHandler');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/games', gameRouter);

app.use(errorHandler);

const PORT = config.port || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
