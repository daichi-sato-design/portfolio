package main

import (
	"flag"
	"fmt"
)

type config struct{
	port	int
	env		string
}

type application struct{
	config config
}

func main(){
	var cfg config
	flag.IntVar(&cfg.port, "port", 8080, "Server port to listen on")
	flag.StringVar(&cfg.env, "env", "development", "Application environment (development|production")
	flag.Parse()

	fmt.Println(cfg);
}