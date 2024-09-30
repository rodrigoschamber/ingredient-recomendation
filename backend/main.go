package main

import (
	"backend/builder"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
    concreteBuilder := &builder.ConcreteBuilder{}
    director := builder.NewDirector(concreteBuilder)
    director.Construct()
    ingredient := concreteBuilder.GetResult()
	http.HandleFunc("/ingredient", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(ingredient)
	})

	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", nil)
    fmt.Printf("Product: %+v\n", ingredient)
}