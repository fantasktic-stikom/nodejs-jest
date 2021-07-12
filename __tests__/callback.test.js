test('test callback', done =>{
    function callback(data) {
        try {
          expect(data).toBe('peanut butter');
          done();
        } catch (error) {
          done(error);
        }
      }
    
    callback('peanut butter');
})