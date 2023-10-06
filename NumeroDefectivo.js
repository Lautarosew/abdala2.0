function EsDefectivo(x) {
    let aux = 0;
    for (i = 1; i <= x / 2; i++) {
        if ((x % i) == 0) {
            aux += i;
            }
         }
            if (aux < x) {
                return true;
            }
            if (aux >= x) {
                return false;
            }
        }
    
    