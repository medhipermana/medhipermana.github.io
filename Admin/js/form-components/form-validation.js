
  $(document).ready(() => {
    $("#assetForm").validate({
      rules: {
        title: "required",
        price: {
          required: true,
          number: true,
        },
        discount: {
          required: true,
          number: true,
        },
        linkDrive: "required",
        productDetails: "required",
        additionalInfo: "required",
        moreDetails: "required",
        fileInput1: "required",
      },
      messages: {
        title: "Please enter the title",
        price: {
          required: "Please enter the price",
          number: "Please enter a valid number",
        },
        discount: {
          required: "Please enter the discount",
          number: "Please enter a valid number",
        },
        linkDrive: "Please enter the link drive",
        productDetails: "Please enter the product details",
        additionalInfo: "Please enter additional information",
        moreDetails: "Please enter more details",
        fileInput1: "Please upload at least 1 image",
      },
      errorElement: "em",
      errorPlacement: function (error, element) {
        // Add the `invalid-feedback` class to the error element
        error.addClass("invalid-feedback");
        if (element.prop("type") === "file") {
          error.insertAfter(element.closest('.form-group'));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid").removeClass("is-valid");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).addClass("is-valid").removeClass("is-invalid");
      },
      submitHandler: function (form) {
        // Form is valid, show SweetAlert and submit the form
        Swal.fire({
          title: 'Success!',
          text: 'Data has been submitted successfully.',
          icon: 'success',
        }).then(() => {
          form.submit();
        });
      },
      invalidHandler: function (form, validator) {
        // Form is invalid, show SweetAlert with error message
        Swal.fire({
          title: 'Error!',
          text: 'Please fill in all required fields correctly.',
          icon: 'error',
        });
      }
    });
  });
