it('should load and compile correct template', function() {
  element(by.linkText('Moby: Ch1')).click();
  var content = element(by.css('[ng-view]')).getText();
  expect(content).toMatch(/controller: ChapterCtrl/);
  expect(content).toMatch(/Book Id: Moby/);
  expect(content).toMatch(/Chapter Id: 1/);

  element(by.partialLinkText('Scarlet')).click();

  content = element(by.css('[ng-view]')).getText();
  expect(content).toMatch(/controller: BookCtrl/);
  expect(content).toMatch(/Book Id: Scarlet/);
});

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/