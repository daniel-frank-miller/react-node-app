
function paymentGateway(amount) {
    var options = {
      key: 'rzp_test_P8LzMHrBgBQ7Y0',
      key_secret: '14BZ4AkfZioI41FGsGzM9VrT',
      amount: amount * 100,
      currency: 'INR',
      name: 'Homaid Services',
      description: 'for testing purpose',
      handler: function (response) {
        // updateFirestoreForMeat(response.razorpay_payment_id, amount);
        // updateFirestoreMeatQuantity(cart);
        console.log(response);
      },
      prefill: {
        name: 'patnala venkata teja',
        email: 'patnalatejaa@gmail.com',
        contact: '9848931589',
      },
      notes: {
        address: 'Razorpay Corporate office',
      },
      theme: {
        color: '#3399cc',
      },
    };
  
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      try {
        const pay = new window.Razorpay(options);
        pay.open();
      } catch (error) {
        console.error('Error loading or initializing Razorpay:', error);
      }
    };
    script.onerror = (error) => {
      console.error('Error loading Razorpay script:', error);
      alert(error);
    };
    document.body.appendChild(script);
  }
  
  export default paymentGateway;
  