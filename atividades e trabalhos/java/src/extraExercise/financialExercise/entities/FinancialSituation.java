package extraExercise.financialExercise.entities;

public class FinancialSituation {

    // attributes
    private Double creditValue;
    private Double debitValue;

    // constructors
    public FinancialSituation(){
    }

    public FinancialSituation(Double creditValue, Double debitValue){
        this.creditValue = creditValue;
        this.debitValue = debitValue;
    }

    // getters and setters

    public Double getCreditValue() {
        return creditValue;
    }

    public void setCreditValue(Double creditValue) {
        this.creditValue = creditValue;
    }

    public Double getDebitValue() {
        return debitValue;
    }

    public void setDebitValue(Double debitValue) {
        this.debitValue = debitValue;
    }

    // methods
    public Double calculateBalance(){
        return creditValue - debitValue;
    }
}
