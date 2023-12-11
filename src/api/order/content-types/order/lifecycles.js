module.exports = {
    async afterCreate(event) {    
        const { result } = event;
       console.log("strapi data",result)
        try{
            const productsHtml = result.product.map(product => `
                <p>Product Name: ${product.name}</p>
                <p>Product Quantity: ${product.quantity}</p>
            `).join('');

            await strapi.plugins['email'].services.email.send({
              to: 'kaparapu.akhilnaidu@gmail.com',
              from: 'akhil@contentql.io', // e.g. single sender verification in SendGrid
              cc: 'jagadeeshm778@gmail.com',
              bcc: '',
              replyTo: 'akhil@contentql.io',
              subject: 'You got a new order !',
            //   text: 'hello jagadeesh maripi', 
              html: `<p>Name: ${result.firstName}</p>
              <p>Phone number: ${result.phoneNumber}</p>
              <p>Email: ${result.emailAddress}</p>
              <p>Street Address: ${result.streetAddress}</p> 
              <p>Zip code:${result.zipCode}</p>
              <p>city :${result.city}</p>
              <p>country:${result.country}</p>
              <p>${productsHtml}</p>`
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}