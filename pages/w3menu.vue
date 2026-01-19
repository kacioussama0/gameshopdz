<script setup lang="ts">
import Header5 from "~/components/Header5.vue";
</script>

<template>
  <header class="site-header mo-left header style-1">
    <Header5 />
  </header>
  <div class="page-content codearea" id="lightgallery">
    <!--banner-->
    <div class="dz-bnr-inr bg-secondary">
      <div class="container">
        <div class="dz-bnr-inr-entry text-start">
          <h1>Menu Styles</h1>
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
              <li class="breadcrumb-item">Menu Styles</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <section class="content-inner codezone" style="position: relative; z-index: 0">
      <div class="container">
        <div class="dz-codebox">
          <div class="dz-code-header">
            <h4>Nav Position Change</h4>
            <p>
              Change nav position add class in <code>.header-nav</code> Nav left add class<code>.justify-content-start</code> , Nav right add class<code>.justify-content-end</code> Nav center add
              class<code>.justify-content-center</code>
            </p>
          </div>
          <div class="dz-element">
            <!-- Header Star -->
            <header class="site-header mo-left header style-1">
              <!-- Main Header -->
              <div class="main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix">
                  <div class="container clearfix d-lg-flex d-block">
                    <!-- Website Logo -->
                    <div class="logo-header logo-dark me-md-5">
                      <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>

                    <!-- Nav Toggle Button -->
                    <button
                      class="navbar-toggler collapsed navicon justify-content-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown2"
                      aria-controls="navbarNavDropdown2"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

                    <!-- Main Nav -->
                    <div class="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown2">
                      <div class="logo-header logo-dark">
                        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
                      </div>
                      <ul class="nav navbar-nav">
                        <li>
                          <RouterLink to=""><span>Nav 1</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 2</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 3</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 4</span></RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main Header End -->
            </header>
            <!-- Header End -->
          </div>
          <div class="dz-element">
            <!-- Header Star -->
            <header class="site-header mo-left header style-1">
              <!-- Main Header -->
              <div class="main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix">
                  <div class="container clearfix d-lg-flex d-block">
                    <!-- Website Logo -->
                    <div class="logo-header logo-dark me-md-5">
                      <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>

                    <!-- Nav Toggle Button -->
                    <button
                      class="navbar-toggler collapsed navicon justify-content-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown3"
                      aria-controls="navbarNavDropdown3"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

                    <!-- Main Nav -->
                    <div class="header-nav w3menu navbar-collapse collapse justify-content-center" id="navbarNavDropdown3">
                      <div class="logo-header logo-dark">
                        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
                      </div>
                      <ul class="nav navbar-nav">
                        <li>
                          <RouterLink to=""><span>Nav 1</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 2</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 3</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 4</span></RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main Header End -->
            </header>
            <!-- Header End -->
          </div>
          <div class="dz-element">
            <!-- Header Star -->
            <header class="site-header mo-left header style-1">
              <!-- Main Header -->
              <div class="main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix">
                  <div class="container clearfix d-lg-flex d-block">
                    <!-- Website Logo -->
                    <div class="logo-header logo-dark me-md-5">
                      <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>

                    <!-- Nav Toggle Button -->
                    <button
                      class="navbar-toggler collapsed navicon justify-content-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown4"
                      aria-controls="navbarNavDropdown4"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

                    <!-- Main Nav -->
                    <div class="header-nav w3menu navbar-collapse collapse justify-content-end" id="navbarNavDropdown4">
                      <div class="logo-header logo-dark">
                        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
                      </div>
                      <ul class="nav navbar-nav">
                        <li>
                          <RouterLink to=""><span>Nav 1</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 2</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 3</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 4</span></RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main Header End -->
            </header>
            <!-- Header End -->
          </div>
          <div class="dz-code">
            <pre class="code-box">
&lt;div class="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown"&gt;
	&lt;ul class="nav navbar-nav"&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 1&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 2&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 3&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 4&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;
</pre
            >
          </div>
        </div>
      </div>

      <hr />

      <div class="container">
        <div class="dz-codebox">
          <div class="dz-code-header">
            <h4>Nav Sub Menu Lavel</h4>
            <p>
              Change sub menu position add class in <code>.sub-menu-down</code> Nav left add class<code>.menu-left</code> , Nav right add class<code>.menu-right</code> Nav center add class<code
                >.menu-center</code
              >
            </p>
          </div>
          <div class="dz-element" style="height: 440px">
            <!-- Header Star -->
            <header class="site-header mo-left header">
              <!-- Main Header -->
              <div class="main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix">
                  <div class="container clearfix d-lg-flex d-block">
                    <!-- Website Logo -->
                    <div class="logo-header logo-dark me-md-5">
                      <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>

                    <!-- Nav Toggle Button -->
                    <button
                      class="navbar-toggler collapsed navicon justify-content-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown5"
                      aria-controls="navbarNavDropdown5"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

                    <!-- Main Nav -->
                    <div class="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown5">
                      <div class="logo-header logo-dark">
                        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
                      </div>
                      <ul class="nav navbar-nav">
                        <li class="sub-menu-down active">
                          <RouterLink to=""><span>Nav 1</span></RouterLink>
                          <ul class="sub-menu">
                            <li><RouterLink to="">Nav link 1</RouterLink></li>
                            <li class="sub-menu-down active">
                              <RouterLink to="">Nav link 2</RouterLink>
                              <ul class="sub-menu">
                                <li><RouterLink to="">Nav link 1</RouterLink></li>
                                <li class="sub-menu-down active">
                                  <RouterLink to="">Nav link 2</RouterLink>
                                  <ul class="sub-menu">
                                    <li><RouterLink to="">Nav link 1</RouterLink></li>
                                    <li><RouterLink to="">Nav link 2</RouterLink></li>
                                    <li><RouterLink to="">Nav link 3</RouterLink></li>
                                    <li><RouterLink to="">Nav link 4</RouterLink></li>
                                    <li><RouterLink to="">Nav link 5</RouterLink></li>
                                  </ul>
                                </li>
                                <li><RouterLink to="">Nav link 3</RouterLink></li>
                                <li><RouterLink to="">Nav link 4</RouterLink></li>
                                <li><RouterLink to="">Nav link 5</RouterLink></li>
                              </ul>
                            </li>
                            <li><RouterLink to="">Nav link 3</RouterLink></li>
                            <li><RouterLink to="">Nav link 4</RouterLink></li>
                            <li><RouterLink to="">Nav link 5</RouterLink></li>
                          </ul>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 2</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 3</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 4</span></RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main Header End -->
            </header>
            <!-- Header End -->
          </div>
          <div class="dz-element" style="height: 440px">
            <!-- Header Star -->
            <header class="site-header mo-left header">
              <!-- Main Header -->
              <div class="main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix">
                  <div class="container clearfix d-lg-flex d-block">
                    <!-- Website Logo -->
                    <div class="logo-header logo-dark me-md-5">
                      <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>

                    <!-- Nav Toggle Button -->
                    <button
                      class="navbar-toggler collapsed navicon justify-content-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown6"
                      aria-controls="navbarNavDropdown6"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

                    <!-- Main Nav -->
                    <div class="header-nav w3menu navbar-collapse collapse justify-content-end" id="navbarNavDropdown6">
                      <div class="logo-header logo-dark">
                        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
                      </div>
                      <ul class="nav navbar-nav">
                        <li class="sub-menu-down active menu-right">
                          <RouterLink to=""><span>Nav 1</span></RouterLink>
                          <ul class="sub-menu">
                            <li><RouterLink to="">Nav link 1</RouterLink></li>
                            <li class="sub-menu-down active">
                              <RouterLink to="">Nav link 2</RouterLink>
                              <ul class="sub-menu">
                                <li><RouterLink to="">Nav link 1</RouterLink></li>
                                <li class="sub-menu-down active">
                                  <RouterLink to="">Nav link 2</RouterLink>
                                  <ul class="sub-menu">
                                    <li><RouterLink to="">Nav link 1</RouterLink></li>
                                    <li><RouterLink to="">Nav link 2</RouterLink></li>
                                    <li><RouterLink to="">Nav link 3</RouterLink></li>
                                    <li><RouterLink to="">Nav link 4</RouterLink></li>
                                    <li><RouterLink to="">Nav link 5</RouterLink></li>
                                  </ul>
                                </li>
                                <li><RouterLink to="">Nav link 3</RouterLink></li>
                                <li><RouterLink to="">Nav link 4</RouterLink></li>
                                <li><RouterLink to="">Nav link 5</RouterLink></li>
                              </ul>
                            </li>
                            <li><RouterLink to="">Nav link 3</RouterLink></li>
                            <li><RouterLink to="">Nav link 4</RouterLink></li>
                            <li><RouterLink to="">Nav link 5</RouterLink></li>
                          </ul>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 2</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 3</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 4</span></RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main Header End -->
            </header>
            <!-- Header End -->
          </div>

          <div class="dz-code">
            <pre class="code-box">
&lt;div class="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown6"&gt;

	&lt;ul class="nav navbar-nav"&gt;
		&lt;li class="sub-menu-down active menu-right"&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 1&lt;/span&gt;&lt;/a&gt;
			&lt;ul class="sub-menu"&gt;
			&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
			&lt;li class="sub-menu-down active"&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;
				&lt;ul class="sub-menu"&gt;
					&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
					&lt;li class="sub-menu-down active"&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;
						&lt;ul class="sub-menu"&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
					&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
				&lt;/ul&gt;

			&lt;/li&gt;
			&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
		&lt;/ul&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 2&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 3&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 4&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;
</pre
            >
          </div>
        </div>
      </div>

      <hr />

      <div class="container">
        <div class="dz-codebox">
          <div class="dz-code-header">
            <h4>Mega Menu Full And Wide</h4>
            <p>Change menu size add class in<code>.has-mega-menu</code> Menu wide width add class<code>.wide-width</code> , Menu full width add class<code>.full-width</code></p>
          </div>
          <div class="dz-element" style="height: 440px">
            <!-- Header Star -->
            <header class="site-header mo-left header">
              <!-- Main Header -->
              <div class="main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix">
                  <div class="container-fluid clearfix d-lg-flex d-block">
                    <!-- Website Logo -->
                    <div class="logo-header logo-dark me-md-5">
                      <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>

                    <!-- Nav Toggle Button -->
                    <button
                      class="navbar-toggler collapsed navicon justify-content-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown7"
                      aria-controls="navbarNavDropdown7"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

                    <!-- Main Nav -->
                    <div class="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown7">
                      <div class="logo-header logo-dark">
                        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
                      </div>
                      <ul class="nav navbar-nav">
                        <li class="has-mega-menu wide-width active">
                          <RouterLink to=""><span>Nav 1</span></RouterLink>
                          <div class="mega-menu">
                            <ul>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 1 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 2 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 3 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 5 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 5 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 2</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 3</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 4</span></RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main Header End -->
            </header>
            <!-- Header End -->
          </div>

          <div class="dz-element" style="height: 440px">
            <!-- Header Star -->
            <header class="site-header mo-left header">
              <!-- Main Header -->
              <div class="main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix">
                  <div class="container-fluid clearfix d-lg-flex d-block">
                    <!-- Website Logo -->
                    <div class="logo-header logo-dark me-md-5">
                      <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>

                    <!-- Nav Toggle Button -->
                    <button
                      class="navbar-toggler collapsed navicon justify-content-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown8"
                      aria-controls="navbarNavDropdown8"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

                    <!-- Main Nav -->
                    <div class="header-nav w3menu navbar-collapse collapse justify-content-end" id="navbarNavDropdown8">
                      <div class="logo-header logo-dark">
                        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
                      </div>
                      <ul class="nav navbar-nav">
                        <li class="has-mega-menu full-width active">
                          <RouterLink to=""><span>Nav 1</span></RouterLink>
                          <div class="mega-menu">
                            <ul>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 1 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 2 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 3 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 5 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 5 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 2</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 3</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 4</span></RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main Header End -->
            </header>
            <!-- Header End -->
          </div>

          <div class="dz-code">
            <pre class="code-box">
&lt;div class="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown8"&gt;

	&lt;ul class="nav navbar-nav"&gt;
		&lt;li class="has-mega-menu full-width active"&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 1&lt;/span&gt;&lt;/a&gt;
			&lt;div class="mega-menu"&gt;
				&lt;ul&gt;
					&lt;li&gt;
						&lt;a to="" class="menu-title"&gt;Heading 1 &lt;/a&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
					&lt;li&gt;
						&lt;a to="" class="menu-title"&gt;Heading 2 &lt;/a&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
					&lt;li&gt;
						&lt;a to="" class="menu-title"&gt;Heading 3 &lt;/a&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
					&lt;li&gt;
						&lt;a to="" class="menu-title"&gt;Heading 5 &lt;/a&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
					&lt;li&gt;
						&lt;a to="" class="menu-title"&gt;Heading 5 &lt;/a&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/div&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 2&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 3&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 4&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;
</pre
            >
          </div>
        </div>
      </div>

      <hr />

      <div class="container">
        <div class="dz-codebox">
          <div class="dz-code-header">
            <h4>Mega Menu Auto Width</h4>
            <p>Change mega menu auto size add class in<code>.has-mega-menu</code> Mega menu auto width add class<code>.auto-width</code></p>
          </div>
          <div class="dz-element" style="height: 440px">
            <!-- Header Star -->
            <header class="site-header mo-left header">
              <!-- Main Header -->
              <div class="main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix">
                  <div class="container-fluid clearfix d-lg-flex d-block">
                    <!-- Website Logo -->
                    <div class="logo-header logo-dark me-md-5">
                      <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>

                    <!-- Nav Toggle Button -->
                    <button
                      class="navbar-toggler collapsed navicon justify-content-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown9"
                      aria-controls="navbarNavDropdown9"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

                    <!-- Main Nav -->
                    <div class="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown9">
                      <div class="logo-header logo-dark">
                        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
                      </div>
                      <ul class="nav navbar-nav">
                        <li class="has-mega-menu auto-width active">
                          <RouterLink to=""><span>Nav 1</span></RouterLink>
                          <div class="mega-menu">
                            <ul>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 1 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 2 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 3 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 5 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 5 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 2</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 3</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 4</span></RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main Header End -->
            </header>
            <!-- Header End -->
          </div>

          <div class="dz-element" style="height: 440px">
            <!-- Header Star -->
            <header class="site-header mo-left header">
              <!-- Main Header -->
              <div class="main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix">
                  <div class="container-fluid clearfix d-lg-flex d-block">
                    <!-- Website Logo -->
                    <div class="logo-header logo-dark me-md-5">
                      <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>

                    <!-- Nav Toggle Button -->
                    <button
                      class="navbar-toggler collapsed navicon justify-content-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown10"
                      aria-controls="navbarNavDropdown10"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

                    <!-- Main Nav -->
                    <div class="header-nav w3menu navbar-collapse collapse justify-content-end" id="navbarNavDropdown10">
                      <div class="logo-header logo-dark">
                        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
                      </div>
                      <ul class="nav navbar-nav">
                        <li class="has-mega-menu auto-width active">
                          <RouterLink to=""><span>Nav 1</span></RouterLink>
                          <div class="mega-menu">
                            <ul>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 1 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 2 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 3 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 5 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 5 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 2</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 3</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 4</span></RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main Header End -->
            </header>
            <!-- Header End -->
          </div>
          <div class="dz-element" style="height: 440px">
            <!-- Header Star -->
            <header class="site-header mo-left header">
              <!-- Main Header -->
              <div class="main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix">
                  <div class="container-fluid clearfix d-lg-flex d-block">
                    <!-- Website Logo -->
                    <div class="logo-header logo-dark me-md-5">
                      <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
                    </div>

                    <!-- Nav Toggle Button -->
                    <button
                      class="navbar-toggler collapsed navicon justify-content-end"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown11"
                      aria-controls="navbarNavDropdown11"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

                    <!-- Main Nav -->
                    <div class="header-nav w3menu navbar-collapse collapse justify-content-center" id="navbarNavDropdown11">
                      <div class="logo-header logo-dark">
                        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
                      </div>
                      <ul class="nav navbar-nav">
                        <li class="has-mega-menu auto-width active menu-center">
                          <RouterLink to=""><span>Nav 1</span></RouterLink>
                          <div class="mega-menu">
                            <ul>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 1 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 2 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 3 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 5 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                              <li>
                                <RouterLink to="" class="menu-title">Heading 5 </RouterLink>
                                <ul>
                                  <li><RouterLink to="">Nav link 1</RouterLink></li>
                                  <li><RouterLink to="">Nav link 2</RouterLink></li>
                                  <li><RouterLink to="">Nav link 3</RouterLink></li>
                                  <li><RouterLink to="">Nav link 4</RouterLink></li>
                                  <li><RouterLink to="">Nav link 5</RouterLink></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 2</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 3</span></RouterLink>
                        </li>
                        <li>
                          <RouterLink to=""><span>Nav 4</span></RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main Header End -->
            </header>
            <!-- Header End -->
          </div>

          <div class="dz-code">
            <pre class="code-box">
&lt;div class="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown11"&gt;

	&lt;ul class="nav navbar-nav"&gt;
		&lt;li class="has-mega-menu auto-width active"&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 1&lt;/span&gt;&lt;/a&gt;
			&lt;div class="mega-menu"&gt;
				&lt;ul&gt;
					&lt;li&gt;
						&lt;a to="" class="menu-title"&gt;Heading 1 &lt;/a&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
					&lt;li&gt;
						&lt;a to="" class="menu-title"&gt;Heading 2 &lt;/a&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
					&lt;li&gt;
						&lt;a to="" class="menu-title"&gt;Heading 3 &lt;/a&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
					&lt;li&gt;
						&lt;a to="" class="menu-title"&gt;Heading 5 &lt;/a&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
					&lt;li&gt;
						&lt;a to="" class="menu-title"&gt;Heading 5 &lt;/a&gt;
						&lt;ul&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 1&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 2&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 3&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 4&lt;/a&gt;&lt;/li&gt;
							&lt;li&gt;&lt;a to=""&gt;Nav link 5&lt;/a&gt;&lt;/li&gt;
						&lt;/ul&gt;
					&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/div&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 2&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 3&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a to=""&gt;&lt;span&gt;Nav 4&lt;/span&gt;&lt;/a&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;
</pre
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
