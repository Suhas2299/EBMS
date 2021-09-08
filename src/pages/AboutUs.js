export const AboutUs = () => {
  return (
    <div>
      <h1 style={{ color: "darkgrey" }}>ELECTRICITY BILL MANAGEMENT SYSTEM </h1>
      <pre style={{ color: "white", fontFamily: "cursive" }}>
        An Automated Billing System............
      </pre>
      <h2 style={{ color: "gold" }}>OUR SERVICES</h2>
      <ul style={{ color: "white", fontFamily: "cursive" }}>
        <li>
          <h3 style={{ color: "skyblue" }}>Customer Service:</h3>
        </li>
        <pre style={{ color: "white", fontFamily: "cursive" }}>
          New User? Register as a customer for getting new connection for
          registration process keep these details ready:
          <ul>
            <li>Valid Email Id Same as provided at time of user login </li>
            <li>Working Phone Number</li>
            <li>Aadhar Number</li>
          </ul>
        </pre>
        <li>
          <h3 style={{ color: "skyblue" }}>Connection Service</h3>
        </li>
        <pre style={{ color: "white", fontFamily: "cursive" }}>
          Need new Connection? Apply for new connection online Details required
          are as follows:
          <ul>
            <li>
              Type of connection required:
              <ul>
                <li>Industrial</li>
                <li>Non Industrial</li>
                <li>Agriculture</li>
              </ul>
            </li>
            <li>Connection Address</li>
          </ul>
        </pre>
        <li>
          <h3 style={{ color: "skyblue" }}>Reading Service</h3>
        </li>
        <ul>
          <li>
            <pre style={{ color: "white", fontFamily: "cursive" }}>
              Enter the valid meter reading at the end of every month and enter
              the number of units consumed
            </pre>
          </li>
        </ul>

        <li>
          <h3 style={{ color: "skyblue" }}>Bill Service</h3>
        </li>
        <ul>
          <li>
            <pre style={{ color: "white", fontFamily: "cursive" }}>
              Generate the bill automatically after entering the number of units
              consumed
            </pre>
          </li>
        </ul>

        <li>
          <h3 style={{ color: "skyblue" }}>Payment Service</h3>
        </li>
        <pre style={{ color: "white", fontFamily: "cursive" }}>
          <ul>
            <li>Payment of your generate bill can be done in three ways:</li>
            <ul>
              <li>Credit Card</li>
              <li>Debit Card</li>
              <li>UPI Method</li>
            </ul>
          </ul>
        </pre>
        <a href="home" class="btn" style={{ border: "2px solid black" }}>
          back to home page
        </a>
      </ul>
    </div>
  );
};
