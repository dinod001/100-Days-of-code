//BAD code

function x(a, b, u) {
    if (a && b) {
      let t = 0;
      for (let i = 0; i < a.length; i++) {
        if (a[i].active === true) {
          t += a[i].price + (a[i].price * 0.18);
        }
      }
  
      if (u === true) {
        console.log("apply discount");
        t = t - (t * 0.05);
      }
  
      if (b === 1) {
        console.log("send email");
        console.log("total: " + t);
      } else {
        console.log("done");
      }
  
      return t;
    } else {
      return null;
    }
  }

// CORRECT code

function calculation(items, shouldSendEmail, applyDiscount) {
    const TAX_RATE = 0.18;
    const DISCOUNT_RATE = 0.05;
  
    if (!Array.isArray(items) || items.length === 0) {
      return 0;
    }
  
    let total = items.reduce((sum, item) => {
      if (item.active) {
        return sum + item.price + item.price * TAX_RATE;
      }
      return sum;
    }, 0);
  
    // Apply discount if needed
    if (applyDiscount) {
      console.log("Applying discount...");
      total -= total * DISCOUNT_RATE;
    }
  
    if (shouldSendEmail) {
      sendEmail(total);
    }
  
    return total;
  }
  
  function sendEmail(total) {
    console.log("Email sent. Total amount:", total);
  }
  
  