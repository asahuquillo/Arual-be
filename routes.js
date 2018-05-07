module.exports = function (app) {
    app.use('/', require('./routes/index'));
    app.use('/users', require('./routes/users'));
    app.use('/Pacientes', require('./routes/Pacientes'));
    app.use('/Patologias', require('./routes/Patologias'));
    app.use('/Insertpatologia', require('./routes/Insertpatologia'));
    app.use('/getodontogramaPersonal', require('./routes/getodontogramaPersonal'));

};