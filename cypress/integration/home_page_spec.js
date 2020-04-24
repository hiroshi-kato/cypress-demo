describe ('The Home Page', () => {
  it ('successfully loads', () => {
    cy.visit ('/');
  });
  it ('visit About Page after "About" clicked', () => {
    cy.visit ('/');
    cy.contains ('About').click (); // 「About」文字列を探し、クリックする。　見つけれないorクリックできないとテスト失敗

    cy.url ().should ('include', '/about'); // urlに「/about」が含まれているか
  });
  it ('visit Topics Page after "Topics" clicked', () => {
    cy.visit ('/');
    cy.contains ('Topics').click ();

    cy.url ().should ('include', '/topics');
    cy.get ('.topics li').should ('have.length', 2); // cy.getのセレクタはjqueryと同じ
  });
});
