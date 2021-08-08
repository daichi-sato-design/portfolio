package main

import (
	"fmt"

	"portfolio/pkg/config"
)

const (
	portNumber = 8080;
)

var app config.AppConfig

func main(){
	// change this to true when in production
	app.InProduction = false

	fmt.Println(portNumber)
}