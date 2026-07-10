const welcomeEmail = (name) => {
  return `
    <div style="font-family:Arial;padding:20px">
      <h2>Welcome, ${name}! 🎉</h2>

      <p>
        Thank you for registering with
        <strong>Enterprise E-Commerce</strong>.
      </p>

      <p>
        We are excited to have you onboard.
      </p>

      <hr>

      <p>
        Happy Shopping!
      </p>
    </div>
  `;
};

export default welcomeEmail;