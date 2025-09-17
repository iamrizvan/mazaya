$(document).ready(function () {
    const blogPosts = [
      {
        title: "Top 5 Snacks People Love in 2025",
        img: "https://images.unsplash.com/photo-1606788075761-66da4b8126d5?auto=format&fit=crop&w=1200&q=80",
        content: "Chips, chocolates, protein bars, dried fruits, and flavored popcorn top the list this year. Consumers now want both indulgence and healthier vending choices."
      },
      {
        title: "Why Every Office Needs a Smart Vending Machine",
        img: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?auto=format&fit=crop&w=1200&q=80",
        content: "Smart vending machines boost productivity with contactless payments, real-time stock updates, and healthier snack options tailored for employees."
      },
      {
        title: "The Rise of Cashless Vending in the UAE",
        img: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
        content: "With 85% of transactions digital, QR codes, NFC, and wallets dominate the vending industry in the UAE, ensuring a faster, safer experience."
      },
      {
        title: "Healthy Snacks That Actually Sell",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
        content: "Granola bars, mixed nuts, and sugar-free drinks outperform traditional vending items as buyers prioritize protein-rich and low-sugar snacks."
      },
      {
        title: "How AI is Transforming Vending",
        img: "https://images.unsplash.com/photo-1581091215367-59e84eaa4d2c?auto=format&fit=crop&w=1200&q=80",
        content: "AI predicts top-selling products, reduces waste through smart inventory, and personalizes offers—redefining vending machine intelligence."
      },
      {
        title: "Eco-Friendly Vending: The Green Push",
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
        content: "Energy-efficient cooling, biodegradable packaging, and solar-powered vending are making the industry more sustainable and climate-conscious."
      },
      {
        title: "Boosting Sales with Seasonal Promotions",
        img: "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?auto=format&fit=crop&w=1200&q=80",
        content: "Offering winter treats or summer smoothies drives seasonal excitement. Limited-time offers increase vending engagement and repeat purchases."
      },
      {
        title: "Why Location is Everything in Vending",
        img: "https://images.unsplash.com/photo-1582233479361-26f1bb4c130b?auto=format&fit=crop&w=1200&q=80",
        content: "Placement in malls, gyms, and transit hubs maximizes sales. Location scouting is the backbone of a profitable vending machine business."
      },
      {
        title: "Beverage Trends in 2025",
        img: "https://images.unsplash.com/photo-1556742400-b5c0b86dcaa0?auto=format&fit=crop&w=1200&q=80",
        content: "Flavored sparkling water, kombucha, and plant-based milk are replacing soda. Machines adapt to trends with rotating seasonal drinks."
      },
      {
        title: "Future of Vending: Connected Everywhere",
        img: "https://images.unsplash.com/photo-1587035889462-97a7aab2b7fc?auto=format&fit=crop&w=1200&q=80",
        content: "The next-gen vending machine will be a smart IoT hub—AI-driven restocking, real-time monitoring, and interactive digital displays."
      },
      {
        title: "Contactless Payments: Hygiene First",
        img: "https://images.unsplash.com/photo-1556742400-b5c0b86dcaa0?auto=format&fit=crop&w=1200&q=80",
        content: "Touch-free QR and NFC payments are no longer optional. Hygiene-conscious consumers prefer machines that eliminate cash handling."
      },
      {
        title: "Vending Beyond Snacks: New Products",
        img: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1200&q=80",
        content: "Machines now sell electronics, beauty products, and PPE kits. Diversifying products ensures relevance across more customer segments."
      }
    ];
  
    blogPosts.forEach((post, index) => {
      let preview = post.content.substring(0, 120) + "...";
      $('#blog-list').append(`
        <div class="blog-card">
          <div class="blog-img">
            <img src="${post.img}" alt="${post.title}">
            <div class="overlay"><h2>${post.title}</h2></div>
          </div>
          <div class="blog-card-content">
            <p id="content-${index}" class="collapsed">${preview}</p>
            <button class="read-more" 
                    data-index="${index}" 
                    data-full="${post.content}">
              Read More
            </button>
          </div>
        </div>
      `);
    });
  
    $(document).on("click", ".read-more", function () {
        const index = $(this).data("index");
        const content = $(`#content-${index}`);
        const fullText = $(this).data("full");
        const preview = fullText.substring(0, 120) + "...";
      
        if (content.hasClass("collapsed")) {
          content
            .removeClass("collapsed")
            .stop()
            .animate({ height: content.get(0).scrollHeight }, 300, function () {
              content.text(fullText).css("height", "auto");
            });
          $(this).text("Read Less");
        } else {
          content
            .addClass("collapsed")
            .stop()
            .animate({ height: "60px" }, 300, function () {
              content.text(preview);
            });
          $(this).text("Read More");
        }
      });
      
  });
  