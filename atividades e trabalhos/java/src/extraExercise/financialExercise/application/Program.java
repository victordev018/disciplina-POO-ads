package extraExercise.financialExercise.application;

import extraExercise.financialExercise.entities.FinancialSituation;

public class Program {

    public static void main(String[] args) {

        // creating instance of FinancialSituation
        FinancialSituation financialSituation = new FinancialSituation(3000.0, 1455.0);

        // show balance
        System.out.printf("Balance: %.2f", financialSituation.calculateBalance());

    }

}
