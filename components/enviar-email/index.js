var nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

exports.sendEmail = function(direccion, servicio, extencion, req, res ){
    console.log(direccion, servicio, extencion);

    if(servicio == 'gmail'){
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            service: 'gmail',
            auth: {
                user: 'goyeselcoca@gmail.com',
                pass: '*********'
            }
        });        
    }else if(servicio == 'outlook'){
        var transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com", 
            secureConnection: false,
            port: 587,
            tls: {
                ciphers: 'SSLv3'
            },
            service: 'Outlook',
            auth: {
                user: 'alexanderbajana99@outlook.es',
                pass: '*********'
            }
        });
    }else if(servicio == 'hotmail'){
        var transporter = nodemailer.createTransport("SMTP", {
            service: "hotmail",
            auth: {
                user: "user@hotmail.com",
                pass: "password"
            }
        });
    }else if(servicio == 'zoho'){
        var transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: 'myzoho@zoho.com',
                pass: 'myPassword'
            }
        });
    }

    var options = {
        viewEngine : {
            extname: '.hbs', // handlebars extension
            layoutsDir: 'views/', // location of handlebars templates
            defaultLayout: 'email', // name of main template
            partialsDir: 'views/', // location of your subtemplates aka. header, footer etc
        },
        viewPath: 'views/',
        extName: '.hbs' 
    };

    transporter.use('compile', hbs(options));

    var mailOptions = {
        from: 'Remitente',
        to: `${direccion}`,
        subject: 'Asunto',
        text: 'Contenido del email',
        template: 'email'
    };
// Enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
            res.send(500, err.message);
        } else {
            console.log("Email sent");
            res.status(200).json(req.body);
        }
    });
};
