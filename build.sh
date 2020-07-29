


function setup_enviroment {
	if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        	setup_linux_enviroment
	elif [[ "$OSTYPE" == "darwin"* ]]; then
		setup_macos_enviroment
	fi
}

function setup_linux_enviroment {
	if [! command -v nodejs &> /dev/null]; then
		sudo apt update
		sudo apt upgrade
		sudo apt-get install nodejs
	fi
}

function setup_macos_enviroment {
	if [! command -v node &> /dev/null]; then
		brew install node
	fi
}
