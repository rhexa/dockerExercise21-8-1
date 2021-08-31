Vagrant.configure("2") do |config|
  # config.vm.define "lab-docker" do |config|
    # boxes at https://vagrantcloud.com/search.
    config.vm.box = "ubuntu/focal64"

    # Define the disk size using disksize plugin. (Only works for increasing size).
    # "vagrant plugin install vagrant-disksize"
    # config.disksize.size = '15gb'

    # Define the hostname (/etc/host)
    # config.vm.hostname = "lab.local"

    # Define the network type. Available private_network, public_network, forwarded_port.
    # https://www.vagrantup.com/docs/networking
    # config.vm.network "public_network"

    # Vagrant guest addition plugin. "vagrant plugin install vagrant-vbguest"
    # https://github.com/dotless-de/vagrant-vbguest
    # additions version when booting this machine
    # config.vbguest.auto_update = true
    # do NOT download the iso file from a webserver
    # config.vbguest.no_remote = true

    # Synced folder
    config.vm.synced_folder "../", "/lab/docker", disabled: false

    config.vm.provider "virtualbox" do |vb|
      vb.name = "lab-ubuntu-docker"

      # Display the VirtualBox GUI when booting the machine
      # vb.gui = true

      # Define the VM memory size
      # vb.memory = "2048"
      # vb.cpus = 2
    end

    config.vm.provision "shell", inline: <<-SHELL
      sudo apt-get update
    SHELL

    config.vm.provision "shell", path: "apt/docker.sh"
  # end
end
